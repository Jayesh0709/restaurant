
import foodModel from '../models/FoodModel.js';

import fs from 'fs';

const addFood = async (req, res) => {
    let image_name = `${req.file.filename}`;
    const food = new foodModel({

        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_name,
        category: req.body.category,
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food added" });
    }
    catch (er) {
        console.log(er);
        res.json({ success: false, message: "Error" });
    }
}

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    }
    catch (er) {
        console.log(er)
        res.json({ success: false, message: "food not found" });
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        // console.log(food)
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "deleted" });
    }
    catch (er) {
        console.log(er);
        res.json({ success: false, message: "error" });

    }
}

export { addFood, listFood, removeFood };

