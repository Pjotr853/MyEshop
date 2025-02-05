import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import lorem from '../../../pictures/';
import loremIpsun from './Lorem-Ipsum.jpg';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Chyba pri načítaní produktov:", error));
    }, []);

    return (
        <div>
            <h2>Produkty</h2>
            <ul>
                {products.map((product) => (
                    <Card key={product._id} style={{ marginBottom: '20px', backgroundColor:'silver' }}>
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Body style={{ display: 'flex' }}>
                            
                        
                            
                            <div style={{ flex: '2' }}>
                                <Card.Title>{product.name} - {product.price} €</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add</Button>
                            </div>
                           
                            <div style={{ flex: '1', paddingRight: '20px' }}>
                                <img 
                                    src={loremIpsun} 
                                    alt={product.name}
                                    style={{ width: '50%', height: 'auto', borderRadius: '8px' }} 
                                />
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
