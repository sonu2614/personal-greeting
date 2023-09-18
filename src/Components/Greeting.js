import React, { useState } from "react";

const Greeting =()=>{

    let [name,setName]=useState("");

    function update(event){
        setName(event.target.value)
    }

    return (
        <div>
            <p>Enter your Name :</p>
            <input type="text" onChange={update} />
            <p>{name}</p>
        </div>
    )
}
export default Greeting;