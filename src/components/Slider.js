import React, { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);

  if (data.length > 10) data.length = 10;

  const length = data.length;

  const currentIndex = (current) => {
    if (current > length - 1) {
      return null;
    }

    return [
      current,
      (current + 1) % length,
      (current + 2) % length,
      (current + 3) % length,
      (current + 4) % length,
      (current + 5) % length,
      (current + 6) % length,
      (current + 7) % length,
    ];
  };

  const nextSlide = () => {
    setCurrent((prevState) => {
      if (prevState === length - 1) return 0;
      return prevState + 1;
    });
  };

  const prevSlide = () => {
    setCurrent((prevState) => {
      if (prevState === 0) return length - 1;
      return prevState - 1;
    });
  };

  console.log(current);
  console.log(currentIndex(current));

  if (!Array.isArray(data) || data.length <= 0) {
    return null; //in case no array or no slides
  }

  return (
    <>
      <section className="slider">
        <button className="arrowBtnLeft">
          <ArrowLeftIcon style={{ fontSize: "200px" }} onClick={prevSlide} />
        </button>
        <button className="arrowBtnRight">
          <ArrowRightIcon style={{ fontSize: "200px" }} onClick={nextSlide} />
        </button>
        <div className="wrapper">
          {currentIndex(current).map((index, position) => {
            const slide = data[index];
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
                style={{ transform: `translateX(${(position - 1) * 100}%)` }}
              >
                <img
                  src={slide.omslagafbeeldingen[1]}
                  alt=""
                  className="sliderImage"
                />
                <h3 className="titleSlide">{slide.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Slider;
