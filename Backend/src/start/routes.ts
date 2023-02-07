import express, { Application } from "express";
import user from "../routes/user";
import auth from "../routes/auth";

const startup = (app: Application) => {
  app.use(express.json());
  app.use("/api/users", user);
  app.use("/api/auth", auth);
}; 

export default startup;
