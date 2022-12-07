import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Copyright } from "../../components/Copyright/Copyright";
import { Menu } from "../../components/Menu/Menu";
import "./index.css";

export const Favorites = () => {
  const [data, setData] = useState(null);

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

  console.log(data);

  return (
    <>
      <Menu />
      <div className="page-favorites">
        {data?.map((game) =>
          game.liked === true ? (
            <Card
              id={game._id}
              image={game.image}
              name={game.name}
              description={game.description}
            />
          ) : null
        )}
        <Copyright />
      </div>
    </>
  );
};
