import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function UncontrolledExample() {
  return (
    <Carousel
      style={{ marginTop: "93px", marginRight: "558px", marginLeft: "65px " }}
    >
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <Carousel.Caption>
          <h3>Football</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <Carousel.Caption>
          <h3>Football</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <Carousel.Caption>
          <h3>Football</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
