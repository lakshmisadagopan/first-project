import React, { useEffect, useState } from "react";
import "./productcomp.css";

function ProductComp(){

    const [product, setproduct] = useState([]);

    const handleproducts = async ()=>{
        let res = await fetch("http://localhost:3000/todoList");
        let data = await res.json();
        setproduct(data);
    };

    useEffect(()=>{
        handleproducts();
    }, []);

    return(
        <div>
            <h1>Our Products</h1>
            <div className="productlist">
                {product.map((items)=>(
                    <div className="items">
                        <img src={items.img} width={350} height={300}/>
                        <h2>{items.name} - {items.quantity}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductComp