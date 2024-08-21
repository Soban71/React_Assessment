import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./carousel.css";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box className="carousel-container">
      <Box
        className="carousel-wrapper"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Box key={index} className="carousel-slide">
            {slide}
          </Box>
        ))}
      </Box>
      {currentIndex < slides.length - 1 && (
        <Button onClick={nextSlide} className="next-button">
          Next
        </Button>
      )}
    </Box>
  );
};

export default Carousel;
