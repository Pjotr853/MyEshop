import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ onSelectProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Chyba pri načítaní produktov:", error));
    }, []);

    return (
        <div>
            <h2>Produkty</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id} onClick={() => onSelectProduct(product._id)}>
                        {product.name} - {product.price}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
