import React from "react";
import "./cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
          <video className="video" src={coverVideo} autoPlay loop muted />
          <h1>Jonathan Alvarado</h1>
          <p>Developer | Designer | Content Creator | Entrepeneur </p>
        </div>
      );
    };

export default Cover;
