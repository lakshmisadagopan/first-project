import React, { useState } from "react";

function ApiCall(){

    const [apidata, setapidata] = useState([]);

   const handlefetch = async ()=>{
    let res = await fetch ("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setapidata(data);
   }


    return(
        <div>
            <h1>API Call</h1>
            <button onClick={handlefetch}>Click to view products</button>
            
                {apidata.map((products)=>(  
                    <div>
                        <h1>{products.title}</h1>
                        <h3>{products.price}</h3>  
                        <img src={products.image} width={200} height={200}/>
                    </div>  
                ))}
            
        </div>
    )
}

export default ApiCall