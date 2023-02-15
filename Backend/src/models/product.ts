import mongoose from "mongoose";
import { categorySchema } from "../models/category";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String },
  image: { type: String, required: true },
  category: { type: categorySchema, required: true },
  description: { type: String, required: true },
  numberInStock: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 0 },
  liked: { type: Boolean },
});

export const Product = mongoose.model("Product", productSchema);
