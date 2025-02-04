import React, { useState } from "react";
import ProductList from "./components/ProductList";


function Home(){
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [refresh, setRefresh] = useState(false);

    return(
        <div>
            <h1>Home Page</h1>
            
            <ProductList key={refresh} onSelectProduct={setSelectedProductId} />
            
            {selectedProductId && (
                <p>Vybraný produkt ID: {selectedProductId}</p>
            )}
        </div>
    );
}

export default Home;