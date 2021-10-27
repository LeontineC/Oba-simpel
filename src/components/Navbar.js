import React, { useContext, useState } from "react";
import { FontContext } from "./FontContext";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import LanguageIcon from "@material-ui/icons/Language";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ImBooks } from "react-icons/im";
import { RiMenu5Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [fontSize, setFontSize] = useContext(FontContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="navbar">
        <img src="images/ObaLogo.svg" alt="OBA simpel logo" className="logo" />
        <button className="menuBtn" onClick={handleClick}>
          {showMenu ? (
            <RiCloseLine className="RiClose" />
          ) : (
            <RiMenu5Fill className="RiMenu" />
          )}
        </button>
        <div className="left">
          <ul className="listLeft" id={showMenu ? "hidden" : ""}>
            <li>
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="navLink"
                onClick={handleClick}
              >
                <HomeIcon style={{ fontSize: "50px" }}/>
                Start
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/activiteiten"
                className="navLink"
                onClick={handleClick}
              >
                <EventIcon style={{ fontSize: "50px" }} />
                Activiteiten
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to="/boeken"
                className="navLink"
                onClick={handleClick}
              >
                <ImBooks style={{ fontSize: "50px" }} />
                Boeken
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="listRight">
            <li>
              <button
                className="btnsRight"
                onClick={() => setFontSize(fontSize + 2)}
              >
                <TextFieldsIcon style={{ color: "$primary-color", fontSize: "2vw" }} />
                vergroot letters
              </button>
            </li>
            <li>
              <button
                className="btnsRight"
                onClick={() => setFontSize(fontSize - 2)}
              >
                <TextFieldsIcon style={{ color: "$primary-color", fontSize: "2vw" }} />
                verklein letters
              </button>
            </li>
            <li>
              <button className="btnsRight">
                <LanguageIcon style={{ color: "$primary-color", fontSize: "2vw" }} />
                Taal
              </button>
            </li>
            <li className="btnsRight">
              <a href="https://www.oba.nl/" style={{color: "teal"}}>
                <ExitToAppIcon style={{ fontSize: "2vw" }} />
                naar OBA.nl
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
