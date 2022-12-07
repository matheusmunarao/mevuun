import React, { useEffect, useRef, useState } from "react";
import Mais from "../../assets/mais.png";
import { Card } from "../../components/Card/Card";
import { Menu } from "../../components/Menu/Menu";
import { Modal } from "../../components/Modal/Modal";
import "./index.css";

export const Home = () => {
  const [dropdown, setDropdown] = useState("");
  const [data, setData] = useState(null);
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log(dropdown);
    if (dropdown === "show") {
      setDropdown("");
    } else {
      setDropdown("show");
    }
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/games", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Menu />
      <div className="page-home">
        {data?.map((game) => (
          <Card
            game={game.id}
            image={game.image}
            name={game.name}
            description={game.description}
          />
        ))}
        <button onClick={toggleDropdown} className="div-mais">
          <img src={Mais} alt="" />
        </button>
      </div>
      <Modal className={dropdown} modalRef={modalRef} />
    </>
  );
};
