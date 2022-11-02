import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <>
      <section className="services-container">
        <h2 className="services-title">Services</h2>
        <div className="service-card">
          <h3 className="service-card-title"> Concrete Surface Cleaning</h3>
          <div className="service-description">
            Pressure washing the most used areas such as drivesways, walkways,
            front entrance stairs, and sidewalks.
          </div>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">Wood Surface Cleaning</h3>
          <div className="service-description">
            From wood decks to fences we make sure that your wood surfaces get
            cleaned and get rid of that dirt build up once and for all.
          </div>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">Gear Cleaning</h3>
          <div className="service-description">
            We provide you with the option to clean various gears such as boats,
            bikes, dog houses, and even outdoor furniture
          </div>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">House Exterior Cleaning</h3>
          <div className="service-description">
            We know how a house looks after it has been pressure washed and we
            know you will like it too. From concrete to vinyl we can wash it.
          </div>
        </div>
      </section>
    </>
  );
};
