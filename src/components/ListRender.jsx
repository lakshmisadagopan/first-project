import React, { useState } from "react";
import "./listrender.css";

function ListRender(){

    const staffdetails = [{
        staffname:"Rose",
        age:23,
        img:"https://www.arkor.nl/wp-content/themes/cryptocurrency-exchange/images/testimonial.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione eos neque fugiat obcaecati nam dolore labore, velit vero quos.",
    },
    {
        staffname:"Angel",
        age:22,
        img:"https://jupiter.artbees.net/wp-content/uploads/2013/05/sortcode-04-500x500.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione eos neque fugiat obcaecati nam dolore labore, velit vero quos.",
    },
    {
        staffname:"David",
        age:28,
        img:"https://jupiter.artbees.net/wp-content/uploads/bfi_thumb/sortcode-03-mj68gfdizflvnlwfpjcg8pm4af34lcfyx5s46xuzv0.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione eos neque fugiat obcaecati nam dolore labore, velit vero quos.",
    },
    {
        staffname:"Febi",
        age:21,
        img:"https://www.marketing-a2z.com/wp-content/uploads/2019/01/team_member2.jpg",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ratione eos neque fugiat obcaecati nam dolore labore, velit vero quos.",
    }];

    const [staff, setstaff] = useState(staffdetails);    
    

    return(
        <div>
            <h1>Employee Details</h1>
                <div>
                    {staff.map((data, i)=>(
                        <div key={i}>
                            <img className="image" src = {data.img} width={200} height={200} />
                            <h1>{data.staffname} - {data.age}</h1>
                            <p>{data.desc}</p>
                        </div>
                    ))}
                </div>

        </div>
    )

}

export default ListRender