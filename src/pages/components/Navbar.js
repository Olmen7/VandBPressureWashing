import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <Link to="/">
          <img
            className="logo"
            src={require("../../assets/Logo.png")}
            alt="Logo"
          />
        </Link>
        <Link to="/contact" className="nav-item">
          Contact Us
        </Link>
      </nav>
    </>
  );
};
