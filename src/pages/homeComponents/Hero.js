import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import TitleText from "../components/TitleText";

export const Hero = () => {
  return (
    <>
      <div className="hero-img">
        <h1 className="hero-title no-show">
          <TitleText copy="V&B Pressure Washing" role="header" />
        </h1>
        <h1 className="hero-title show">
          <h2 className="hero-title show big">
            <TitleText copy="V&B" role="header" />
            <br />
          </h2>
          <TitleText copy="Pressure Washing" role="header" />
        </h1>
        <div className="hero-cta-container">
          <h2 className="description">
            Small pressure washing business wanting to help the neighbours in
            Long Beach to make sure everyone is happy and I stay busy working.
          </h2>
          <Link to="/contact" className="hero-cta">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};
