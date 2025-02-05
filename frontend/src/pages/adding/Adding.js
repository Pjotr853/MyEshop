//import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import './components/Adding.css'


function Adding(){
    //const [refresh, setRefresh] = useState(false);

    return(
        <div className="container">
            <h1>Adding</h1>
            <ProductForm />
        </div>
    );
}

export default Adding;
//<ProductForm onProductAdded={() => setRefresh(!refresh)} />