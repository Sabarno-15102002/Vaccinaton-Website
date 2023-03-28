import React, { useState, useContext } from "react";
import "./Infant.css";
import Vaccine from "./Vaccine";
import vaccineList from "../VaccineList";
import userContext from "../../context/userContext";
export default function Infant() {
  const infant = vaccineList[0].Sublist;
  console.log(infant);
  const [searchField, setSearchField] = useState("");
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const user = useContext(userContext);

  return (   
    
    <>
      <div className="sidebar">
        <a className="active" href="#home">
          Infant
        </a>
        {infant.map((x) => {
          return <a href={"#" + x.time}>{x.time}</a>;
        })}
      </div>
      <div className="content">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h2>Infant Vaccination</h2>
              <p>Explore age-wise recommended vaccinations for your child.</p>
              <p>
                Don’t miss Vaccination so that diseases get locked down. Not
                childhood. icon-birth
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://flo.health/uploads/media/sulu-1000x-inset/01/2221-Vaccination%20at%209%20month.jpg?v=1-0"
              alt=""
            />
          </div>
          <input className="vaccine-input" placeholder="Search vaccine here.." value={searchField} onChange={handleChange}/>
        </div>
      </div>
      {infant.map((x) => {
        console.log(x.time)
        return (
          <section id={x.time} className="content">
            {x.vaccines.map((y) => {
              var source=y.name.toLowerCase();
        var target=searchField.toLowerCase();
              return (
                source.includes(target)? <Vaccine
                  user={user.state}
                  diseaseName={y.name}
                  dose={y.Dose}
                  toBeGiven={y.toBeGiven}
                  ProtectsAgainst={y.protectsAgainst}
                  protection={y.protection}
                />:null
              );
            })}
          </section>
        );
      })}
    </>
  );
}


