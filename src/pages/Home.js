import React from "react";
import { Cta } from "./homeComponents/Cta";
import { Hero } from "./homeComponents/Hero";
import { MyGoal } from "./homeComponents/MyGoal";
import { Services } from "./homeComponents/Services";
import { Steps } from "./homeComponents/Steps";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="line"></div>
      <MyGoal />
      <div className="line"></div>
      <Services />
      <div className="line"></div>
      <Cta />
      <div className="line"></div>
      <Steps />
    </>
  );
};
