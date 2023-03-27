import React, { useState } from "react";
import "./Infant.css";
import Vaccine from "./Vaccine";
import vaccineList from "../VaccineList";
export default function Toodlers() {
  const infant = vaccineList[1].Sublist;
  console.log(infant);
  const [searchField, setSearchField] = useState("");
  const handleChange = e => {
    setSearchField(e.target.value);
  };

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
              <h2>Toodlers Vaccination</h2>
              <p>Explore age-wise recommended vaccinations for your child.</p>
              <p>
                Don’t miss Vaccination so that diseases get locked down. Not
                childhood. icon-birth
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220524014817/ri/750/src/images/news/ImageForNews_714635_16533712960157333.jpg"
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
                  diseaseName={y.name}
                  dose={y.Dose}
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


