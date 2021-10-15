import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";

const Home = () => {
  const [sliderData, setSliderData] = useState();

  useEffect(() => {
    fetch(`https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/`)
      .then((response) => response.json())
      .then((newData) => {
        console.log(newData);
        setSliderData(newData);
      });
  }, []);

  if (!sliderData) return null;

  

console.log(sliderData.largetype.boeken)

  return (
    <div>
      <Slider  data={sliderData.largetype.boeken} />
      <Slider data={sliderData.audio.boeken} />
      <Slider data={sliderData.book.boeken} />
    </div>
  );
};

export default Home;
