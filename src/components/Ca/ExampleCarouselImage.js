import React from "react";
import { Image } from "react-bootstrap";

const ExampleCarouselImage = ({ text }) => {
  return (
    <div>
      <div className="d-block w-100 h-250 bg-dark text-white text-center">
        <Image
          src="./assets/img/stade-match-sport-football.png"
          alt="placeholder"
          fluid
        />
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
