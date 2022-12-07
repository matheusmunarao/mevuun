import React, { useRef, useState } from "react";
import Mais from "../../assets/mais.png";
import { Card } from "../../components/Card/Card";
import { Menu } from "../../components/Menu/Menu";
import { Modal } from "../../components/Modal/Modal";
import "./index.css";

export const Home = () => {
  const [dropdown, setDropdown] = useState("");
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log(dropdown);
    if (dropdown === "show") {
      setDropdown("");
    } else {
      setDropdown("show");
    }
  };

  return (
    <>
      <Menu />
      <div className="page-home">
        <Card game="god of war" description="description" />
        <button onClick={toggleDropdown} className="div-mais">
          <img src={Mais} alt="" />
        </button>
      </div>
      <Modal className={dropdown} modalRef={modalRef} />
    </>
  );
};
