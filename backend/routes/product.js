import express from "express";
import Products from "../models/Products.js";

const router = express.Router();

// Získanie všetkých produktov
router.get("/", async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Pridanie nového produktu
router.post("/", async (req, res) => {
    try {
        const newProduct = new Products(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
