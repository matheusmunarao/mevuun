import React, { useEffect, useRef, useState } from "react";
import Mais from "../../assets/mais.png";
import Menos from "../../assets/menos.png";
import { Card } from "../../components/Card/Card";
import { Copyright } from "../../components/Copyright/Copyright";
import { Menu } from "../../components/Menu/Menu";
import { Modal } from "../../components/Modal/Modal";
import "./index.css";

export const Home = () => {
  const modalRef = useRef(null);
  const [dropdown, setDropdown] = useState("");
  const [data, setData] = useState(null);

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
  }, [data]);

  return (
    <>
      <Menu />
      <div className="page-home">
        <div className="container-cards">
          {data?.map((game) => (
            <Card
              id={game._id}
              image={game.image}
              name={game.name}
              description={game.description}
            />
          ))}
        </div>

        <button onClick={toggleDropdown} className="div-mais">
          <img src={dropdown ? Menos : Mais} alt="" />
        </button>
        <Copyright />
      </div>
      <Modal className={dropdown} modalRef={modalRef} />
    </>
  );
};
