import React, { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Activity from "../components/Activity";

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
      <section className="sliderActiviteiten" style={{overflowX: "hidden"}}>
        <button className="arrowBtnLeft">
          <ArrowLeftIcon style={{ fontSize: "200px" }} onClick={prevSlide} />
        </button>
        <button className="arrowBtnRight">
          <ArrowRightIcon style={{ fontSize: "200px" }} onClick={nextSlide} />
        </button>
        <div className="wrapperActiviteiten">
          {currentIndex(current).map((index, position) => {
            const slide = data[index];
            const day = new Date(slide.datum);
            const dayFormat =
              day.toLocaleString("nl", { weekday: "short" }) +
              " " +
              day.getDate() +
              " " +
              day.toLocaleString("nl", { month: "short" });
            return (
              <div
                className={index === current ? "slideA active" : "slideA"}
                key={index}
                style={{ transform: `translateX(${(position - 1) * 100}%)` }}
              >
                <Activity
                  key={slide.id}
                  title={slide.title}
                  datum={dayFormat}
                  tijd={slide.tijd}
                  omslagafbeeldingen={slide.omslagafbeeldingen[0]}
                  description={slide.beschrijving}
                  location={slide.locatie}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SliderActiviteiten;
