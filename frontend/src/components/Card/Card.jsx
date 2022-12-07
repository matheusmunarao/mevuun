import React, { useState } from "react";
import Trash from "../../assets/lata-de-lixo.png";
import "./index.css";

export const Card = (props) => {
  const [favorite, setFavorite] = useState(false);

  const token = localStorage.getItem("token");

  const deleteGame = async (id) => {
    return fetch(`http://52.1.165.156:3000/api/v1/games/${id}`, {
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

  const favoriteGame = async (setFavorite, id) => {
    return fetch(`http://52.1.165.156:3000/api/v1/games/like/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setFavorite),
    }).then((data) => {
      return data.status;
    });
  };

  const unfavoriteGame = async (setFavorite, id) => {
    return fetch(`http://52.1.165.156:3000/api/v1/games/unlike/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setFavorite),
    }).then((data) => {
      return data.status;
    });
  };

  const handleToggleFavorite = async () => {
    setFavorite((previous) => !previous);

    console.log(favorite);

    if (!favorite) {
      await favoriteGame(
        {
          liked: true,
        },
        props.id
      );
    } else {
      await unfavoriteGame(
        {
          liked: false,
        },
        props.id
      );
    }
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt="" />
        <button onClick={handleDelete} className="trash">
          <img src={Trash} alt="" />
        </button>
        <button onClick={handleToggleFavorite} className="star">
          <img src={props.isFavorited} alt="" />
        </button>
      </div>
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
