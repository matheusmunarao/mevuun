import React from "react";
import FullStar from "../../assets/estrela-cheia.png";
import EmptyStar from "../../assets/estrela.png";
import { Menu } from "../../components/Menu/Menu";
import "./index.css";

export const Game = () => {
  return (
    <>
      <Menu />
      <div className="page-game">
        <img src="" alt="" />
        <div>
          <h1></h1>
          <button>
            <img src={EmptyStar} alt="" />
          </button>
        </div>
        <p></p>
      </div>
    </>
  );
};
