import axios from "axios";
import React, { useEffect, useState } from "react";
import Exit from "../../assets/x.png";
import "./index.css";

export const Modal = (props) => {
  const { className, modalRef } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const token = localStorage.getItem("token");

  const createGame = async (gameInfo) => {
    return fetch("http://52.1.165.156:3000/api/v1/games", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameInfo),
    }).then((data) => {
      return data.status;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isGameCreated = await createGame({
      name: title,
      description: description,
      image: image,
    });

    if (isGameCreated === 201) {
      window.alert("Jogo cadastrado com sucesso!");
    } else {
      window.alert("Preencha novamente!");
    }
  };

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <h1>Adicione um jogo!</h1>
      <form action="">
        <div className="form-field">
          <label>Jogo</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>
            Descrição <span>(Não exagere nos caractéres, por favor 😢)</span>
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>URL da Imagem</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="div-button">
          <button onClick={handleSubmit}>Adicionar</button>
        </div>
      </form>
    </div>
  );
};
