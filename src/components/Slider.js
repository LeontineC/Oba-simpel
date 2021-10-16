import React, { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);

  if (data.length > 10) data.length = 10;

  const length = data.length;
  console.log(length);

  const currentIndex = (current) => {
    if (current > length - 1) {
      return null;
    }

    return [
      current,
      (current + 1) % length,
      (current + 2) % length,
      (current + 3) % length,
    ];
  }; 
   
  /*const nextSlide = () => {
    //if length-1 this is last slide so returns to 0= first slide continuous loop
    setCurrent(prevState => {
      if (prevState === length - 1) return 0
      return prevState + 1
    });  */

  const nextSlide = () => {
    //if length-1 this is last slide so returns to 0= first slide continuous loop
    setCurrent(current === length - 1 ? 0 : current + 1); //else current + next in array
  }; 

  const prevSlide = () => {
    //if current is first slide count backwards in array from first
    setCurrent(current === 0 ? length - 1 : current - 1); //else count backwards from slide your on now
  };

  console.log(current);

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

        
          {data.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active"  : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.omslagafbeeldingen[1]}
                    alt=""
                    className="sliderImage"
                  />
                )}
               
              </div>
            );
          })}
       
      </section>
    </>
  );
};

export default Slider;
