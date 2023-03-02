import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.send(
    "AUVGpa2jxi8X-mx-g8doWrGXy9TQIMGIZ-SMHYoQLqCnKQdDHWdg6g3f1QvYi-DBz0J0Pj-kbVcnSgJp"
  );
});

export default router;
