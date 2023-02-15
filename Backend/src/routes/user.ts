import bycrpt from "bcrypt";
import _ from "lodash";
import auth from "../middleware/auth";
import { User, validateUser } from "../models/user";
import express, { Application, Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/:id", async (req: any, res: Response) => {
  const user = await User.findById(req.params.id).select("-password");
  res.send(user);
});

router.get("/me", auth, async (req: any, res: Response) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user: any = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists.");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bycrpt.genSalt(10);
  user.password = await bycrpt.hash(user.password, salt);

  user = await user.save();

  const token = user.generateAuthToken();

  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});

export default router;
