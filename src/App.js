import React, { useEffect, useContext } from "react";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import userContext from "./context/userContext";
function App() {
  const user = useContext(userContext);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        // console.log(currUser);
        user.setState(currUser);
      } else {
        // console.log("No User");
        user.setState(null);
      }
    });
  }, )
  
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
        <Route path="/account" element={<Account user={user.state}/>} />
      </Routes>
    </Router>
  );
}

export default App;
