import express, { Request, Response, NextFunction } from "express";
import { Category } from "../models/category";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const categories = await Category.find().select("-__v");
  res.send(categories);
});

export default router;
