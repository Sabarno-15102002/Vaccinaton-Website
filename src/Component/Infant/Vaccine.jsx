import React from "react";

export default function Vaccine(props)
{

    const handleClick = () => {
        if(props.user){
            console.log(props.user);
        }else{
            console.log("No User");
        }
    }

    return <div className="vaccine">
        <h1>💉{props.diseaseName}</h1>
        <p><strong>Dose:</strong>{props.dose}</p>
        <p><strong>Protects against:</strong>{props.ProtectsAgainst}</p>
        <p><strong>To be given:</strong>{props.toBeGiven}</p>
        <p><strong>How can you help protect your child?</strong>:{props.protection}</p>
        <button onClick={handleClick} className="btn btn-dark btn-lg">Register</button>
        <hr style={{width:"10%"}}/>
    </div>
}