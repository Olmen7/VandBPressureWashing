import React from "react";
import "./Steps.css";

export const Steps = () => {
  return (
    <>
      <section className="steps-container">
        <h3 className="steps-title">We make it easy</h3>
        <div className="steps">
          <h4 className="step-title">Step 1:</h4>
          <span className="step-description">
            Contact us for a free estimate.
          </span>
        </div>
        <div className="steps">
          <h4 className="step-title">Step 2:</h4>
          <span className="step-description">Schedule an appointment.</span>
        </div>
        <div className="steps">
          <h4 className="step-title">Step 3:</h4>
          <span className="step-description">
            Relax and enjoy our 100% customer satisfaction service.
          </span>
        </div>
      </section>
    </>
  );
};
