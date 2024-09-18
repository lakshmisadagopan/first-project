import React, { useEffect, useState } from "react";

function ApiCallWithEffect(){

    const [newproducts, setnewproducts] = useState([]);

    const handleproducts = async ()=>{
        let res = await fetch ("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);
        setnewproducts(data)
    }
    
    useEffect(()=>{
        handleproducts();
    }, []);

    return(
        <div>
            <h1>API Call - WithEffect()</h1>
            {newproducts}
        </div>
    )
}

export default ApiCallWithEffect