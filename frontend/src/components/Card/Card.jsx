import React from "react";
import imagem from "../../assets/download.jpg";
import "./index.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imagem} alt="" />
        <button>❤️</button>
      </div>
      <div className="card-content">
        <h3>{props.game}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
