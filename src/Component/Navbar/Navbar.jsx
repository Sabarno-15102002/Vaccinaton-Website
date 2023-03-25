import React, { useState } from "react";
import Login from "../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
function Navbar() {
  // const handleLogOut = () => {
  //   if(localStorage.getItem("token")===null)
  //   {
  //     Swal.fire({
  //       title: 'You are already logged out',
  //       showConfirmButton: true,
  //       confirmButtonColor: "#db334f"
  //     })
  //   }
  //   else
  //   {
  //     const swalWithBootstrapButtons = Swal.mixin({
  //       customClass: {
  //         confirmButton: 'btn btn-success',
  //         cancelButton: 'btn btn-danger'
  //       },
  //       buttonsStyling: false
  //     })

  //     swalWithBootstrapButtons.fire({
  //       title: 'Are you sure?',
  //       text: "Do you really want to sign out? ",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes',
  //       cancelButtonText: 'No',
  //       reverseButtons: true
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Succesfully Logged Out',
  //           text: 'Visit our site again',
  //           showConfirmButton: true,
  //           confirmButtonColor: "#db334f"
  //         })
  //         localStorage.removeItem("token");
  //         window.location = "/";
  //       } else if (
  //         /* Read more about handling dismissals below */
  //         result.dismiss === Swal.DismissReason.cancel
  //       ) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Cancelled',
  //           showConfirmButton: true,
  //           confirmButtonColor: "#db334f"
  //         })
  //       }
  //     })
  //   }
  // }
  const authenticated = localStorage.getItem('authenticated');
  const [authenticate, setAuthenticate] = useState(authenticated);
  console.log(authenticate);
  const navigate = useNavigate();
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
      })
      .catch((err) => {
        alert(err.message);
      })
  }
  return (
    <nav class="navbar navbarHeight navbar-expand-lg navbar-light bg-light navbar-adjust-custom">
      <a className="navbar-brand" href="/">
        <img src="images/icon.png" alt="icon" className="icon" />
        <span className="iconText">Vaccine</span>
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
            > Sign Out
            </a>}

            {/* {authenticated !== "false" && < a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            > Sign Out
            </a>} */}
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