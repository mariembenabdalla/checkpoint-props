import React from "react";
import Player from "./Players";

const PlayersList = () => {
  const players = [
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portuguese",
      jerseyNumber: 7,
      age: 36,
      imageUrl: "assets/img/cristiano.png",
    },
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentine",
      jerseyNumber: 30,
      age: 34,
      imageUrl: "assets/img/messi-76.jpg",
    },
    {
      name: "Neymar Jr",
      team: "Paris Saint-Germain",
      nationality: "Brazilian",
      jerseyNumber: 10,
      age: 30,
      imageUrl: "assets/img/moscow-russia-june-27-2018-260nw-2224389639.png",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "-207px",
      }}
    >
      {players.map((player, index) => (
        <div key={index}>
          <Player player={player} />
        </div>
      ))}
    </div>
  );
};

export default PlayersList;
