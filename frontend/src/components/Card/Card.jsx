import React from "react";
import "./index.css";

export const Card = (props) => {
  const token = localStorage.getItem("token");

  const favoriteGame = async (gameFav) => {
    return fetch("http://localhost:3000/api/v1/games/like/{}", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameFav),
    }).then((data) => {
      return data.status;
    });
  };

  const handleFavorite = async (event) => {
    event.preventDefault();
    const isGameCreated = await createGame({
      name: title,
      description: description,
      image: image,
    });
  };

  return (
    <a href={`/${props.game}`} className="card-container">
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </a>
  );
};
