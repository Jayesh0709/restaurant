import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connect = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected");
    } catch (er) {
        console.log("Mongo Error", error);
    }
}


