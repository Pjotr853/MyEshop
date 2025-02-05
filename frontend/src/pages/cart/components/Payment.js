import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cartSlice";
//import axios from "axios";

function Payment(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber]= useState("");
    const [submitted, setSubmitted] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
/*
        setName("");
        setSurname("");
        setAddress("");
        setEmail("");
        setNumber("");
        */
        setSubmitted(true);
    };

    const handleConfirmOrder = async () => {
        const orderData = {
            name,
            surname,
            address,
            email,
            number,
            products: cartItems,
        };

        try {
            //const response = await axios.post("http://localhost:5000/confirm-order", orderData);
            console.log(orderData); 
            alert("Objednávka bola odoslana");
            setName("");
            setSurname("");
            setAddress("");
            setEmail("");
            setNumber("");
            dispatch(clearCart());
        } catch (error) {
            console.error("Chyba objednávky:", error);
        }
    };

    return(
        <div>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <h1>Payment</h1>
                    <p >Name<br/>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </p>
                    <p>Surname<br/>
                        <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
                    </p>
                    <p>Adress<br/>
                        <input type="text" placeholder="Adress" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    </p>
                    <p>Email<br/>
                        <input type="email" placeholder="name.surname@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </p>
                    <p>Number<br/>
                        <input type="text" placeholder="+421912345678" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                    </p>
                    <button type="submit">Review</button>
                </form>
             ) : (
                <div>
                    <h2>Rekapitulácia objednávky</h2>
                    <p><strong>Meno:</strong> {name}</p>
                    <p><strong>Priezvisko:</strong> {surname}</p>
                    <p><strong>Adresa:</strong> {address}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Telefón:</strong> {number}</p>

                    <h3>Objednané produkty</h3>
                    <ul>
                        {cartItems.map((product) => (
                            <li key={product._id}>
                                {product.name} - {product.price}€ (x{product.quantity})
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleConfirmOrder}>Submit</button>
                </div>
            )}
        </div>
    );
}

export default Payment;