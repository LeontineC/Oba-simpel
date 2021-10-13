import React, { useEffect, useState } from "react";

const Slider = ({ genre }) => {
  // const [current, setCurrent] = useState(0);
  
// const beelden = {omslagafbeeldingen}
// const arrBeelden = Object.entries(beelden);
//  console.log(arrBeelden)
//  const length = arrBeelden.length;
const [sliderData, setSliderData] = useState()
  
useEffect(() => {
  //  fetch ( `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/largetype/`)
  //  fetch ( `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/audiobook/`)
  fetch(
    `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/${genre}`
  )
    .then((response) => response.json())
    .then((newData) => {
      setSliderData(newData.boeken)
      // console.log(newData.boeken)
    });
}, [genre]);
 


  if (!sliderData) return null;

  console.log(sliderData.length)

  if (sliderData.length > 10) sliderData.length = 10;
  

  return (
    <>
      {sliderData.map(({ id,title, omslagafbeeldingen }) => (
       
        <div>{title}{id}
         <img src={omslagafbeeldingen[1]} alt=""/>
        </div>

      ))}
      
    </>
  );
};

export default Slider;
