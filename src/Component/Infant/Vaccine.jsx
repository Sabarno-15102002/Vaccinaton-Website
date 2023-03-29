import React from "react";
import { app } from "../Login/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

export default function Vaccine(props)
{

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    const handleClick = async () => {
        document.getElementById("vaccine_date").setAttribute("min", new Date().toISOString().split("T")[0]);
        const registeredDate = document.getElementById("vaccine_date").value;
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
                document.getElementById("${props.diseaseName}").classList.remove("btn-dark");
                document.getElementById("${props.diseaseName}").classList.add("btn-success");
                document.getElementById("${props.diseaseName}").innerText = `Registered On ${registeredDate}`;
                document.getElementById("${props.diseaseName}").ariaDisabled = true;
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
        <button onClick={handleClick} id="${props.diseaseName}" className="btn btn-dark btn-lg">Register On <input type="date" id="vaccine_date" name="vaccine_date"></input></button>
        <hr style={{width:"10%"}}/>
    </div>
}