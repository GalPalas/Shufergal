import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import startDB from "./start/db";
import startup from "./start/routes";

const app: Application = express();

app.use(cors());

startup(app);
startDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
