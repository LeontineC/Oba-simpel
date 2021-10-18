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
        <section className="left">
         <img src="images/ObaLogo.svg" alt="logo" className="logo" />
          <ul className="listLeft list" className={showMenu ? "hidden" : ""}>
            <li className="startNav" style={{ color: "teal" }}>
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="navLink"
                onClick={handleClick}
              >
                <HomeIcon style={{ fontSize: "5vw" }} />
                Start
              </NavLink>
            </li>
            <li className="activiteitenNav" style={{ color: "teal" }}>
              <NavLink
                activeClassName="active"
                to="/activiteiten"
                className="navLink"
                onClick={handleClick}
              >
                <EventIcon style={{ fontSize: "5vw" }} />
                Activiteiten
              </NavLink>
            </li>
            <li className="boekenNav" style={{ color: "teal" }}>
              <NavLink
                activeClassName="active"
                to="/boeken"
                className="navLink"
                onClick={handleClick}
              >
                <ImBooks style={{ fontSize: "5vw" }} />
                Boeken
              </NavLink>
            </li>
          </ul>
        </section>

        <button className="menuBtn" onClick={handleClick}>
          {showMenu ? (
            <RiCloseLine className="RiClose" />
          ) : (
            <RiMenu5Fill className="RiMenu" />
          )}
        </button>

        <section className="right">
          <ul className="listRight list" id={showMenu ? "hidden" : ""}>
            <li>
              <button
                className="btnsRight"
                onClick={() => setFontSize(fontSize + 2)}
              >
                <TextFieldsIcon style={{ color: "teal", fontSize: "2vw" }} />
                vergroot letters
              </button>
            </li>
            <li>
              <button
                className="btnsRight"
                onClick={() => setFontSize(fontSize - 2)}
              >
                <TextFieldsIcon style={{ color: "teal", fontSize: "2vw" }} />
                verklein letters
              </button>
            </li>
            <li>
              <button className="btnsRight">
                <LanguageIcon style={{ color: "teal", fontSize: "2vw" }} />
                Taal
              </button>
            </li>
            <li className="btnsRight">
              <a href="https://www.oba.nl/">
                <ExitToAppIcon style={{ color: "teal" }} />
                naar OBA.nl
              </a>
            </li>
          </ul>
        </section>
        <hr className="hr"/>
      </nav>
    </>
  );
};

export default Navbar;
