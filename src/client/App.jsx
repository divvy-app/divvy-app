/**
 * @file Defines the top-level app component for the Divvy app. Project is
 * currently configured to accept a mix of .jsx and .tsx files.
 */

import React from "react";
import "./style.css";
import { Routes, Route, Link } from "react-router-dom"
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import History from "./pages/History.jsx";
import Split from "./pages/Split.jsx";

// includes JSX
const App = () => (
  <div>
    <nav className="navbar">
      <img className="navbar-logo" src={"/assets/images/logo.png"} alt="DIV/VY" />
      <div className="navbar-links">
        <Link className="navbar-link" to="/"> Home </Link>
        <Link className="navbar-link" to="/login"> Login </Link>
        <Link className="navbar-link" to="/split"> Split a Bill </Link>
        <Link className="navbar-link" to="/history"> Bill History </Link>
      </div>
    </nav>
    <Routes>
      <Route path="/*" element={ <Landing /> }/> 
      <Route path="/login" element={ <Login /> }/>
      <Route path="/split" element={ <Split /> }/>
      <Route path="/history" element={ <History /> }/>
    </Routes>
  </div>
);

export default App;
