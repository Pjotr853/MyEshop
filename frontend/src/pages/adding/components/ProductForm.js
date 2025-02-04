import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/products", {
                name,
                price: Number(price),  
                description
            }, {
                headers: { "Content-Type": "application/json" }  
            });
            

            console.log("Produkt pridaný:", response.data);
            setName("");
            setPrice("");
            setDescription("");
        } catch (error) {
            console.error("Chyba pri pridávaní produktu:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Názov" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Cena" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <input type="text" placeholder="Popis" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Pridať produkt</button>
        </form>
    );
};

export default ProductForm;
