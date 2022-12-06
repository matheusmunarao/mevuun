import React from "react";
import { Card } from "../../components/Card/Card";
import { Menu } from "../../components/Menu/Menu";
import "./index.css";

export const Favorites = () => {
  return (
    <>
      <Menu />
      <div className="page">
        <Card game="god of war" description="description" />
      </div>
    </>
  );
};
