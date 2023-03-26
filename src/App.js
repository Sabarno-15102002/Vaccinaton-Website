import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Chart from "./Component/Chart/Chart";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Infant from "./Component/Infant/Infant";
import Toodlers from "./Component/Infant/Toodlers";
import School from "./Component/Infant/School";
import Account from "./Component/Account/Account";
function App() {
  function HomePage()
  {
    return <>
      <Navbar/>
      <Home/>
      <About/>
      <Chart/>
      <Contact/>
    </>
  }
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/infant" element={<Infant/>} />
        <Route path="/toodlers" element={<Toodlers/>} />
        <Route path="/School going kids" element={<School/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </Router>
  );
}

export default App;
