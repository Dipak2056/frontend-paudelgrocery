import React from "react";
import "./carousels.css";
import Carousel from "react-bootstrap/Carousel";

export const CarouselComponent = () => {
  return (
    <div className="carousels">
      <h2>New Arrivals</h2>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img
            src="https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg"
            className="d-block w-100"
            alt="First slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">Shop Now</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">Shop Now</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">
              Shop Now <i className="fa-solid fa-chevron-right"></i>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
