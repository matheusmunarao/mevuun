import React from "react";
import { Card } from "../../components/Card/Card";
import { Menu } from "../../components/Menu/Menu";
import "./index.css";

export const Home = () => {
  return (
    <>
      <Menu />
      <div className="page-home">
        <Card game="god of war" description="description" />
      </div>
    </>
  );
};
