import React, { useState } from "react";
import Flags from "./Flags";

const Slider = ({ countries }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(prevSlide + 1, countries.length - 1)
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const renderDots = () => {
    return countries.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentSlide ? "active" : ""}`}
        onClick={() => setCurrentSlide(index)}
      />
    ));
  };

  return (
    <div className="slider mb-5">
      <div className="slide-container">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="arrow left-arrow"
        >
          &#9664;
        </button>
        <div className="slides">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`slide ${
                index === currentSlide
                  ? "active"
                  : index === currentSlide + 1
                  ? "next"
                  : ""
              }`}
            >
              <Flags {...country} />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentSlide >= countries.length - 1}
          className="arrow right-arrow"
        >
          &#9654;
        </button>
      </div>
      <div className="dots">{renderDots()}</div>
    </div>
  );
};

export default Slider;
