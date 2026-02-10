import express from 'express';
import authMiddleware from '../middleware/auth.js'
import { placeOrder, updateStatus, userOrder, verifyOrder } from "../controllers/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authMiddleware,userOrder);
orderRouter.post("/status",updateStatus);


export default orderRouter;
