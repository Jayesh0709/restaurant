import express from 'express';
import cors from 'cors';
import { connect } from './config/db.js';
import foodRouter from './routes/FoodRoute.js';
import userRouter from './routes/userRoute.js';

import cartRouter from './routes/cartRoute.js';
import 'dotenv/config'
import orderRouter from './routes/orderRoutes.js';
// config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());


// connect DB
connect()



// api routes
app.use('/api/food', foodRouter);
app.use("/images", express.static("uploads"));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// routes
app.get("/", (req, res) => {
    res.send("API works");
})

app.listen(port, () => {
    console.log(`server runs on port : ${port}`);
})