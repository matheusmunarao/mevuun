import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="container-image">
        <img src="" alt="" />
        <button>Comprar</button>
      </div>
      <div className="container-content">
        <h3>{props.game}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
