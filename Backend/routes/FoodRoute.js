import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import { listOrder } from '../controllers/orderModel.js';


import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
const foodRouter = express.Router();

// Image store





cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"uploads"
    }
})

const upload = multer({ storage })

foodRouter.post('/add', upload.single("image"), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);
foodRouter.get("/orderlist", listOrder);


export default foodRouter;