import express, { Application } from "express";
import user from "../routes/user";

const startup = (app: Application) => {
  app.use(express.json());
  app.use("/api/users", user);
};

export default startup;
