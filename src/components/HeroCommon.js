import React from "react";
import Navbar from "./Navbar";

const HeroCommon = (props) => {
  return (
    <div className={"hero " + props.imgClass}>
      <Navbar />
      <div className="main-text">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default HeroCommon;
