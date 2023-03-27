import React, { useState } from "react";
import "./Account.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";



export default function Account() {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setURL] = useState("");
   onAuthStateChanged(auth, (user) => {
    if (user) {
        setEmail(user.email);
      setName(user.displayName);
    setURL(user.photoURL);
      console.log(email,url);
    } else {
      console.log(" User is signed out");
    }
  });
  
  return (
    <section id="account">
        <div className="row">
            <div className="col-lg-8 account-info">
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
            <div className="col-lg-4">
                <img src={url} alt="account-dp"/>
            </div>
        </div>
      <table className="vaccine_info">
        <thead>
          <tr>
            <th>Name of Vaccine</th>
            <th>Date of vaccination</th>
          </tr>
        </thead>
        <tbody id="VaccineBody">
        <tr>
              <td>Name</td>
              <td>Vaccine</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Vaccine</td>
            </tr>
        </tbody>
        
      </table>
    </section>
  );
}
