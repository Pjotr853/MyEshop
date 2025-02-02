import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Products = mongoose.model("Product", productSchema);
export default Products;
