import React, { useEffect, useState, useContext } from "react";
import Slider from "../components/Slider";
import SliderActiviteiten from "../components/SliderActiviteiten";
import Tips from "../components/Tips";
import { ImBooks } from "react-icons/im";
import EventIcon from "@material-ui/icons/Event";
import { MdLightbulbOutline } from "react-icons/md";
import {FontContext} from '../components/FontContext';

const Home = () => {
  const [sliderData, setSliderData] = useState();
  const [activiteitenData, setActiviteitenData] = useState();
  const [fontSize] = useContext(FontContext);

  useEffect(() => {
    fetch(`https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/`)
      .then((response) => response.json())
      .then((newData) => {
        console.log(newData);
        setSliderData(newData);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/activiteiten/random`
    )
      .then((response) => response.json())
      .then((otherData) => {
        console.log(otherData);
        setActiviteitenData(otherData);
      });
  }, []);

  if (!sliderData) return null;
  if (!activiteitenData) return null;

  console.log(sliderData.largetype.boeken);
  console.log(activiteitenData);

  return (
    <>
      <div className="Home" style={{ marginTop: "20%" }}>
      <h2 className="hTwoHome" style={{fontSize:`${fontSize}px`}}>
        <MdLightbulbOutline style={{ fontSize: "400%" }}/> Tips
      </h2>
      <Tips/>
        <h2 className="hTwoHome">
          <EventIcon style={{ fontSize: "400%" }} /> Activiteiten
        </h2>
        <SliderActiviteiten data={activiteitenData.activiteiten} />
        <h2 className="hTwoHome">
          <ImBooks style={{ fontSize: "400%" }} /> Grootletter boeken
        </h2>
        <Slider data={sliderData.largetype.boeken}
         />
        <h2 className="hTwoHome">
          <ImBooks style={{ fontSize: "400%" }} /> Audio boeken
        </h2>
        <Slider data={sliderData.audio.boeken} />
        <h2 className="hTwoHome">
          <ImBooks style={{ fontSize: "400%" }} /> Boeken
        </h2>
        <Slider data={sliderData.book.boeken} />
      </div>
    </>
  );
};

export default Home;
