import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
