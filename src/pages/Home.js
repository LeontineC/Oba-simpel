import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { ImBooks } from "react-icons/im";

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

  console.log(sliderData.largetype.boeken);

  return (
    <>
      <div className="Home">
        <h2>
          <ImBooks/> Grootletter boeken
        </h2>
        <Slider data={sliderData.largetype.boeken} />
        <h2>
          <ImBooks/> Audio boeken
        </h2>
        <Slider data={sliderData.audio.boeken} />
        <h2>
          <ImBooks/> Boeken
        </h2>
        <Slider data={sliderData.book.boeken} />
      </div>
    </>
  );
};

export default Home;
