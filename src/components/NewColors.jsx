import React, { useState } from "react";

function NewColors(){

    const [colors, setcolors] = useState("Black")

    const handlecolor = ()=>{
      
        if (colors == "Black"){
            
            setcolors("Red")

        }else{
            
            setcolors("Black")
        }
    }


    return(
        <div>
            <h1>My favorite color - {colors}</h1>
            <button onClick={handlecolor}>Try New</button>
        </div>
    )
}

export default NewColors