import express, { Request, Response, NextFunction } from "express";
import { Product } from "../models/product";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const products = await Product.find().select("-__v");
  res.send(products);
});

export default router;
