import React from "react";
import { app } from "../Login/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

export default function Vaccine(props)
{

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    const handleClick = async (event) => {
        Array.from(document.getElementsByClassName("vaccine_date")).forEach(element => {
            element.setAttribute("min", new Date().toISOString().split("T")[0]);
        });
        const registeredDate = document.getElementById(`${props.diseaseName}`).value;
        if(registeredDate !== ""){
            try {
                const docRef = await addDoc(collection(db, "users"), {
                  user: props.user.uid,
                  vaccine: props.diseaseName,
                  date: registeredDate
                });
                console.log("Document written with ID: ", docRef.id);
                Swal.fire(
                    'Good job!',
                    `You have successfully registered for ${props.diseaseName} vaccine on ${registeredDate}!`,
                    'success'
                  )
                event.target.classList.remove("btn-dark");
                event.target.classList.add("btn-success");
                event.target.innerText = `Registered On ${registeredDate}`;
                event.target.ariaDisabled = true;
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }

    return <div className="vaccine">
        <h1>💉{props.diseaseName}</h1>
        <p><strong>Dose:</strong>{props.dose}</p>
        <p><strong>Protects against:</strong>{props.ProtectsAgainst}</p>
        <p><strong>To be given:</strong>{props.toBeGiven}</p>
        <p><strong>How can you help protect your child?</strong>{props.protection}</p>
        <button onClick={handleClick} className="btn btn-dark btn-lg">Register On <input type="date" id={props.diseaseName} className="vaccine_date" name="vaccine_date"></input></button>
        <hr style={{width:"10%"}}/>
    </div>
}