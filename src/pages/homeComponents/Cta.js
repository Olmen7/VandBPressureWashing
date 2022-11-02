import React from "react";
import "./Cta.css";
import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <>
      <section className="main-cta-container">
        <h3 className="main-cta-title">Request Our Services</h3>
        <Link to="/contact" className="main-cta-card">
          <span className="main-cta" to="/contact">
            Click here to Request a Quote
          </span>
        </Link>
        <a href="tel:0000000000" className="main-cta-card">
          <span className="main-cta"> Or Call Us: 000.000.0000</span>
        </a>
      </section>
    </>
  );
};
