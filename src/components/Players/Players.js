import React from "react";
import { Button, Card } from "react-bootstrap";

const Players = ({ player }) => {
  const { name, team, nationality, jerseyNumber, age, imageUrl } = player;
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age} <br />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Players;
