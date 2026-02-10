import orderModel from "../models/orderModels.js";
import userModel from '../models/userModel.js'
import Stripe from "stripe";

// placing user order from frontend

const stripe = new Stripe(process.env.STRIP_SECRET_KEY);

const placeOrder = async (req, res) => {
    console.log("place");
    const frontendUrl = "http://localhost:5173"
    // console.log("order")
    try {
        // console.log(req.body);
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.orderData.items,
            amount: req.body.orderData.amount,
            address: req.body.orderData.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
        const line_items = req.body.orderData.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: Math.round(item.price * 100 * 80)
            },
            quantity: 1
        }))
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 200
            },
            quantity: 1
        })
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontendUrl}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({ success: true, session_url: session.url })
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: "Error" });
    }
}


const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success == 'true') {
            await orderModel.findByIdAndUpdate(orderId, { payment: "true" });
            res.json({ success: true, message: "Paid" })
        }
        else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" })
        }
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: "Error" });
    }
}

const userOrder = async (req, res) => {
    try {
        // console.log("userorder")
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: "Error" });
    }
}

//  listing orders on admin pannel

const listOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (e) {
        res.json({ success: false, message: "error" });
    }
}

const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "updated" });
    } catch (e) {
        res.json({ success: false, message: "Error" });
    }
}

export { placeOrder, verifyOrder, userOrder, listOrder, updateStatus };