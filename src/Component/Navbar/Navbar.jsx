import React, { useState } from "react";
import "./Navbar.css";
import Login from "../Login/Login";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Navbar() {
  const auth = getAuth();
  const [url, setURL] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setURL(user.photoURL);
    } else {
      console.log(" User is signed out");
    }
  });
  const authenticated = localStorage.getItem('authenticated');
  const [authenticate, setAuthenticate] = useState(authenticated);
  console.log(authenticate);
  // const navigate = useNavigate();
  const handleLogin = () => {
    Login();
  }

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((response) => {
        console.log(response);
        setAuthenticate(false);
        localStorage.setItem('authenticated', false);
        console.log(localStorage.getItem('authenticated'));
        // location.reload();
        let timerInterval
        Swal.fire({
          // title: 'Auto close alert!',
          title: 'Succesfully Logging out',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('Succesfully Logged out');
            window.location.reload();
          }
        })
      })
      .catch((err) => {
        alert(err.message);
      })
  }
  return (
    <nav class="navbar navbarHeight navbar-expand-lg navbar-light bg-light navbar-adjust-custom">
      <a className="navbar-brand" href="/">
        <img src="Image/syringe.png" alt="icon" className="icon navbar-dp" />
        <span className="iconText">freeVaccineCamp</span>
      </a>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-custom-bg-class navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active ">
            <a class="nav-link item" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link item" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link item" href="/contact">
              Contact Us
            </a>
          </li>
          <li class="nav-item dropdown">
            {authenticated !== "true" ? <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            > Sign In
            </a> : < a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            > <img className="navbar-dp" src={url} alt="display" />
            </a>}
            <div
              className="dropdown-menu dropdown-menu-right dp-button"
              aria-labelledby="navbarDropdown"
            >
              {authenticated !== "true" ? <a className="dropdown-item" href="/login"
                onClick={handleLogin}
              >
                Login
              </a> : <a className="dropdown-item"
                onClick={handleLogOut}
              >
                Logout
              </a>}
              <div className="dropdown-divider"></div>
              <a class="dropdown-item" href="/learnmore">
                More
              </a>
              <div className="dropdown-divider"></div>
              {authenticated !== "false" ? <a class="dropdown-item" href="/account">
                View Account
              </a> : null}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;