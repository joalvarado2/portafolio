import React from "react";
import "./cover.css";
import Video1 from "../../media/Video1.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
          <video className="video" src={Video1} autoPlay loop muted />
          <h1>Jonathan Alvarado</h1>
          <p>Estudiante de ingenieria de software | Desarrollador Frontend | </p>
        </div>
      );
    };

export default Cover;
