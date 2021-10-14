import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Slider = ({ genre }) => {
  const [sliderData, setSliderData] = useState();
  // const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(
      `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/`
    )
      .then((response) => response.json())
      .then((newData) => {
        setSliderData(newData.boeken);
      });
  }, [genre]);

  if (!sliderData) return null;

  console.log(sliderData.length);
  if (sliderData.length > 10) sliderData.length = 10;
  const lengthSlider = sliderData.length;
  console.log(lengthSlider);

  /*const currentIndexes = (current) => {
    if (current > lengthSlider - 1) {
      return console.error('current index cannot be more than array length');
    }
    return [
      current,
      (current + 1) % lengthSlider,
      (current + 2) % lengthSlider,
      (current + 3) % lengthSlider,
      (current + 4) % lengthSlider,
    ];
  }; */
  
  // const nextSlide = () => {  //if length-1 this is last slide so returns to 0= first slide continuous loop
    // setCurrent(current === lengthSlider - 1 ? 0 : current + 1);   //else current + next in array
  // };

  // const prevSlide = () => {    //if current is first slide count backwards in array from first 
    // setCurrent(current === 0 ? lengthSlider - 1 : current - 1); //else count backwards from slide your on now
  // };


  


  return (
    <>
   <section className="slider">
        <button className="arrowBtnLeft">
          <ArrowLeftIcon style={{ fontSize: "200px" }}  />
        </button>
        <button className="arrowBtnRight">
          <ArrowRightIcon style={{ fontSize: "200px" }} />
        </button>

       

        {sliderData.audio.map(({ title, omslagafbeeldingen }) => (
          <div className="sliderContainer">
            <img src={omslagafbeeldingen[1]} alt="" className="sliderImage" />
            {title}
          </div>
        ))} 
      </section>
    </>
  );
};

export default Slider;
