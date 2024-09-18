import React, { useState } from "react";
import "./bdaycomp.css";

function BdayComp(){

    const data=[
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      ];

      const [bdlist, setbdlist] = useState(data);

      const handleclear =()=>{
        setbdlist([])
      }

    return(
        <div className="poster">
            <h1> {bdlist.length} Birthdays Today</h1>

            {bdlist.map((value)=>(
                <div className="main">
                    <div>
                        <img className="profilepic mb mr" src={value.image}/>        
                    </div>
                    <div> 
                        <h3>{value.name}</h3>
                        <span>{value.age} years</span>
                    </div>               
                </div>           
            ))}

            <button onClick={handleclear}>Clear All</button>
        </div>
    )
}

export default BdayComp