//import React, { useState } from "react";
import ProductList from "./components/ProductList";
import  './components/home.css';


function Home(){   
    return(
        <div className="container">
            <h1>Home Page</h1>
            <ProductList  />
            
        </div>
    );
}

export default Home;