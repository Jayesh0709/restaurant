import express from 'express';
import { addtoCart,removefromCart,getCart } from '../controllers/cardController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add',authMiddleware,addtoCart)
cartRouter.post('/remove',authMiddleware,removefromCart);
cartRouter.post('/get',authMiddleware,getCart);

export default cartRouter;