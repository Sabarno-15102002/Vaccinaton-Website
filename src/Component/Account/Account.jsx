import React, { useState,useEffect } from "react";

import "./Account.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../Login/firebaseConfig.js";

import {
  collection,
  getDocs,
 // deleteDoc,
//  doc,
} from "firebase/firestore";

export default function Account(props) {
  
  
  // const findUserId=user.state.uid;
   console.log(props.user);
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setURL] = useState("");
   onAuthStateChanged(auth, (user) => {
    if (user) {
        setEmail(user.email);
      setName(user.displayName);
    setURL(user.photoURL);
     // console.log(email,url);
    } else {
      console.log(" User is signed out");
    }
  });
  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data()})));
    };

    getUsers();
  }, );
  
  var fromDate=new Date();
  var year = fromDate.getFullYear().toString();
var month = fromDate.getMonth() < 10 ? ('0'+ (fromDate.getMonth()+1).toString()).toString() : (fromDate.getMonth()+1).toString();

var date =  fromDate.getDate() < 10 ? ('0'+ fromDate.getDate()).toString(): (fromDate.getDate()).toString();
var currentDate=year+"-"+month+"-"+date;
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
