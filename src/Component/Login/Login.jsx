import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { app } from "./firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
    const navigate = useNavigate();
    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider();

    const handleSubmit = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                console.log(response.user);
                localStorage.setItem('authenticated', true);
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    }
    return (<section id="login">
        <h1>Get Vaccinated</h1>
        <img src="Image/home.png" alt="" />
        <button className="btn btn-lg btn-dark" onClick={handleSubmit}>Sign in with Google</button>
    </section>);
}