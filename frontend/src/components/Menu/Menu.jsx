import React from "react";

export const Menu = () => {
  return (
    <div className="fixed top-0 flex">
      <a href="/home">Logo</a>
      <nav>
        <ul>
          <li>Meu Perfil</li>
          <li>Meus Jogos</li>
        </ul>
      </nav>
    </div>
  );
};
