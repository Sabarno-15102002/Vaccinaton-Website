import React, { useState,useEffect } from "react";
import Swal from 'sweetalert2';
import "./Account.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../Login/firebaseConfig.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Account(props) {
  
   //console.log(props.user);
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
  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getUsers();
  }, );

  const deleteUser = async (id,vaccine) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    Swal.fire(
      'Good job!',
      `You have successfully cancelled booking for ${vaccine}` ,
      'success'
    )
  };
  
  var currentDate=new Date().toISOString().split("T")[0];

console.log(currentDate);
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
          {
            users.map((u)=>{
               if((u.user===props.user.uid) && currentDate<=u.date)
              {
                return (
                  <tr>
                    <td>{u.vaccine}</td>
                    <td>{u.date}</td>
                    <td><button
              onClick={() => {
                deleteUser(u.id,u.vaccine);
              }}
            >
              {" "}
              Cancel Booking
            </button></td>
                  </tr>
              )}
              else return null;
            })
          } 
        </tbody>
        
      </table>
    </section>
  );
}

