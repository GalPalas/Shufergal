import * as dotenv from "dotenv";
import express, { Application } from "express";
import user from "../routes/user";
import auth from "../routes/auth";
import products from "../routes/product";
import seed from "../routes/seed";
import categories from "../routes/category";
import orders from "../routes/order";
import paypal from "../routes/paypal";

dotenv.config();
const startup = (app: Application) => {
  app.use(express.json());
  app.use("/api/users", user);
  app.use("/api/auth", auth);
  app.use("/api/categories", categories);
  app.use("/api/products", products);
  app.use("/api/orders", orders);
  app.use("/api/keys/paypal", paypal);
  app.use("/api/seed", seed);
};

export default startup;
