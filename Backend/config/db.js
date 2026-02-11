import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connect = async () => {
    console.log(process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => { console.log("MongoDB connected") })
        .catch((er) => console.log("Not connected"))
}


