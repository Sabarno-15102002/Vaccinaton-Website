import React from "react";
import "./Account.css";
export default function Account() {
  return (
    <section id="account">
        <div className="row">
            <div className="col-lg-8 account-info">
                <h3>Ananya Pal</h3>
                <p>ananya2003pal@gmail.com</p>
            </div>
            <div className="col-lg-4">
                <img src="https://lh3.googleusercontent.com/a/AGNmyxZS_MVhZSnwvFaOBYfBojWD45fIgFvnb-xUUc2j=s96-c" alt="account-dp"/>
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
