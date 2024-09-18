import React, { useState } from "react";
import "./inputcomp.css";

function InputComp(){
      
    const[inputname, setinputname] = useState("");
    const[inputmail, setinputmail] = useState("");
    const[inputpwd, setinputpwd] = useState("");
    const[submit, setsubmit] = useState(false);

    const handlename = (event)=>{
        setinputname(event.target.value);
    }

    const handlemail = (event)=>{
        setinputmail(event.target.value);
    }

    const handlepwd = (event)=>{
        setinputpwd(event.target.value);
    }

    const handleinput =()=>{
        setsubmit(true);
    }


    return(
        <div>
            <div>
                <div><h3> Register Here! </h3></div>
                <div onChange={handlename}><input placeholder="Name"/></div>
                <div onChange={handlemail}><input placeholder="Email"/></div>
                <div onChange={handlepwd}><input placeholder="Password"/></div>
            <div><button onClick={handleinput} className="button_reg">Register</button></div>
            </div>

            {submit && 
                <div>
                <p><b>Registered Name {inputname}</b></p>
                <p><b>Registered Email {inputmail}</b></p>
                <p><b>Registered Password {inputpwd}</b></p>
                </div>
            }
        </div>

        
    )
}

export default InputComp
