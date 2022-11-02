import React from "react";
import "./MyGoal.css";

export const MyGoal = () => {
  return (
    <>
      <section className="myGoal-section">
        <div className="myGoal-left">
          <h2 className="myGoal-title">Our Mission</h2>
          <p className="myGoal-description">
            We want to make sure that everyone involved gets the value and
            service they deserve. We make sure to focus on creating exceptional
            client relations.
          </p>
        </div>
        <div className="myGoal-right">
          <div className="myGoal-img"></div>
        </div>
      </section>
    </>
  );
};
