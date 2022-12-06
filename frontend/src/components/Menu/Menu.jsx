import React from "react";
import Home from "../../assets/botao-de-inicio.png";
import Favoritos from "../../assets/estrela.png";
import Conta from "../../assets/perfil-de-usuario.png";
import "./index.css";

export const Menu = () => {
  return (
    <div className="menu-div">
      <nav>
        <ul className="menu-ul">
          <li>
            <a href="/">
              <img src={Home} alt="" />
              Home
            </a>
          </li>
          <li>
            <a href="/favoritos">
              <img src={Favoritos} alt="" />
              Favoritos
            </a>
          </li>
          <li>
            <a href="/meu-perfil">
              <img src={Conta} alt="" />
              Meu Perfil
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
