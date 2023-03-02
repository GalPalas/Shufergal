import express, { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import { Order } from "../models/order";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const order = await Order.findById(req.params.id);
  res.send(order);
});

router.put(
  "/:id/pay",
  async (req: Request, res: Response, next: NextFunction) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      if (order.isPaid) {
        return res.status(400).send({ message: "Error order is already paid" });
      }
      order.isPaid = true;
      order.paidAt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        email_address: req.body.email_address,
      };
      const paidOrder = await order.save();
      res.send({ message: "Order paid successfully", order: paidOrder });
    } else {
      res.status(404).send({ message: "Error: order not found" });
    }
  }
);

//Todo : add authentication to this route and use Fawn for transaction.
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send("Invalid User.");

  let newOrder = new Order({
    ...req.body,
    user: user._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
});

export default router;
