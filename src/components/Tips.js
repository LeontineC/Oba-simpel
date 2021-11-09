import React from "react";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="containerTips">
      <div className="wrapperImagesTips">
        <Link to="/maatje">
          <img
            className="imageTips"
            src="https://www.oba.nl/dam/nieuws/0418_oba-maatje_mauritsdame.jpg.rendition.384.614.jpeg"
            alt="vrouw en vrijwilliger kijken samen naar een boek in een woonkamer"
          />
          <h2 className="overlayTipsOne">OBA maatje</h2>
        </Link>
        <Link to="/ebooksluisterboeken">
          <img
            className="imageTips"
            src="https://www.oba.nl/dam/0420_luisterboeken.jpg.rendition.792.1267.jpeg"
            alt="man met koptelefoon zit buiten naar een luisterboek te luisteren"
          />
          <h2 className="overlayTipsTwo">E-books en luisterboeken</h2>
        </Link>
        <Link to="/passendlezen">
          <img
            className="imageTips"
            src="./passendLezen.jpeg"
            alt="vrouw met koptelefoon kijkt met glimlach voor zich uit op een fluwelen fauteuil"
          />
          <h2 className="overlayTipsThree">Passend Lezen</h2>
        </Link>
      </div>
    </div>
  );
};

export default Tips;
