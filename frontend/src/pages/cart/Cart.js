import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import './components/Cart.css';
import Payment from "./components/Payment";

function Cart(){
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    return(
        <div className="container">
            <h1>Cart</h1>
            <ul>
                {cartItems.length > 0 ? (
                    cartItems.map((product) => (
                        <li key={product._id}>
                            {product.name} - {product.price}€ (x{product.quantity})
                            <button onClick={() => dispatch(removeFromCart(product._id))}>-</button>
                        </li>
                    ))
                ) : (
                    <p>Košík je prázdny</p>
                )}
            </ul>
            <h4>Platba</h4>
            <Payment/>
        </div>
    );
}

export default Cart;