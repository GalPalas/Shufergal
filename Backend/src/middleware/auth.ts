import jwt from "jsonwebtoken";
import express, { Application, Request, Response, NextFunction } from "express";

const auth = (req: any, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access Denied. No token provided.");

  try {
    const decoded = jwt.verify(token, "mySecretKey");
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("Invalid token.");
  }
};

export default auth;
