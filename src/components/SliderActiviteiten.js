import React, { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const SliderActiviteiten = ({ data }) => {
    const [current, setCurrent] = useState(0);

    

    if (data.length > 7) data.length = 7;
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

      if (!Array.isArray(data) || data.length <= 0) {
        return null; 
      }

      return (
        <>
          <section className="sliderActiviteiten">
            <button className="arrowLeft">
              <ArrowLeftIcon style={{ fontSize: "200px" }} onClick={prevSlide} />
            </button>
            <button className="arrowRight">
              <ArrowRightIcon style={{ fontSize: "200px" }} onClick={nextSlide} />
            </button>
        <div className="wrapperActiviteiten">
            {currentIndex(current).map((index, position) => {
              const slide = data[index]
              return (
                <div
                  className={index === current ? "slideA active" : "slideA"}
                  key={index}
                  style={{transform: `translateX(${(position -1) * 100}%)` }}
                >
                  <img
                      src={slide.omslagafbeeldingen[0]} 
                      alt=""
                      className="sliderImageActiviteiten"
                    />
                  <div className="overlay">
                        <h3>{slide.begin}</h3>
                        <h1>{slide.einde}</h1>
                        <h3>{slide.title}</h3>
                       
                  </div>
                </div>
              );
            })}
            </div>
          </section>
        </>
      );
    };

    export default SliderActiviteiten;