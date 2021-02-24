import React from "react";
import "./About.css";
import imagen from "../../media/imagen.webp"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you somenthing about me</h3>
        <p>
          Nullam tempus vitae turpis eget placerat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla sed urna nec quam vulputate
          convallis et at massa. Sed facilisis laoreet libero, eget vehicula
          justo consectetur quis. Donec id sapien nec neque luctus vulputate.
          Mauris a lectus at libero dictum euismod at ut turpis. 
        </p>
      </div>
      <div className="about-img">
          <img src={imagen} alt=""/>
      </div>
    </div>
  );
};

export default About;
