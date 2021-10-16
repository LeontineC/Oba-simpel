import React, { useContext } from "react";
import { FontContext } from "./FontContext";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import LanguageIcon from "@material-ui/icons/Language";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [fontSize, setFontSize] = useContext(FontContext);

  return (
    <>
      <nav className="navbar">
        <section className="left">
          <ul className="listLeft">
            <li>logo</li>
            <li className="startNav" style={{ color: "teal" }}>
              <HomeIcon style={{ color: "teal", fontSize: "5vw" }} />
              Start
            </li>
            <li className="activiteitenNav" style={{ color: "teal" }}>
              <EventIcon style={{ color: "teal", fontSize: "5vw" }} />
              Activiteiten
            </li>
            <li className="boekenNav" style={{ color: "teal" }}>
              <ImBooks style={{ fontSize: "5vw" }} />
              Boeken
            </li>
          </ul>
        </section>
        <section className="right">
          <ul className="listRight">
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
            <li className="btnsRight retourOBA">
              <a href="https://www.oba.nl/">
                <ExitToAppIcon style={{ color: "teal" }} />
                naar OBA.nl
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
