// import React from 'react'
// import './App.css'
// import Logs from "./asset/E-Voting Application __ Behance/img2.png"

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">E-Vote</div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/elections">Elections</Link>
          </li>
          <li>
            <Link to="/vote">Vote</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <div className="nav-btn">
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="signup" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;