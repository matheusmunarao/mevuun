import React, { useState } from "react";
import FullStar from "../../assets/estrela-cheia.png";
import EmptyStar from "../../assets/estrela.png";
import Trash from "../../assets/lata-de-lixo.png";
import "./index.css";

export const Card = (props) => {
  const [favorite, setFavorite] = useState(false);

  const token = localStorage.getItem("token");

  const deleteGame = async (id) => {
    return fetch(`http://localhost:3000/api/v1/games/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((data) => {
      return data.status;
    });
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteGame(props.id);
  };

  const favoriteGame = async (gameFav, id) => {
    return fetch(`http://localhost:3000/api/v1/games/like/${id}`, {
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
    setFavorite((previous) => !previous);
    console.log(favorite);
    await favoriteGame(
      {
        liked: favorite,
      },
      props.id
    );
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt="" />
        <button onClick={handleDelete} className="trash">
          <img src={Trash} alt="" />
        </button>
        <button onClick={handleFavorite} className="star">
          <img src={favorite ? FullStar : EmptyStar} alt="" />
        </button>
      </div>
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
