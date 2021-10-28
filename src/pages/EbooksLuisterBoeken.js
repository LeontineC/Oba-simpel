import React, { useContext } from "react";
import { FontContext } from "../components/FontContext";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

const EbooksLuisterBoeken = () => {
  const [fontSize] = useContext(FontContext);

  return (
    <div className="ebooksLuisterBoeken" style={{ fontSize: `${fontSize}px` }}>
      <div className="textEBooks">
        <h1>Hoe leen je e-books en luisterboeken?</h1>
        <img
          src="https://www.oba.nl/dam/0420_luisterboeken.jpg.rendition.792.1267.jpeg"
          alt="man met koptelefoon zit buiten naar een luisterboek te luisteren"
          className="imgEBooks"
        />
        <p>
          Als lid van de OBA heb je toegang tot duizenden e-books en
          luisterboeken uit de landelijke online Bibliotheek. In een paar
          stappen lees je ze op je smartphone of tablet via de online
          Bibliotheek-app. Lees hier alles over deze app en probeer hem meteen
          uit!
        </p>
        <p>Wil je e-books van de bibliotheek lezen op je e-reader?</p>
        <p>
          <a href="https://www.onlinebibliotheek.nl/klantenservice/e-books/e-reader.html">
            {" "}
            Bekijk hoe het werkt op onlinebibliotheek.nl{" "}
          </a>{" "}
        </p>
        </div>
        <hr style={{ width: "50%", marginLeft: "25%", marginBottom: "5%" }} />
        <div className="instructionsEBooks">
          <ul className="instructionsList">
            <li className="instructionsListItem">
              <RiNumber1 style={{ fontSize: "30px", margin: "10%", color: "teal" }} />
              <h3 style={{ margin: "5%" }}>Download de app</h3>{" "}
              <p>
                Ga naar de  <a href="https://apps.apple.com/us/app/id1517985604" style={{color: "teal"}}>
                   App Store{" "} 
                </a>{" "}
                of{" "}
                <a href="https://play.google.com/store/apps/details?id=com.odilo.bibliotheek" style={{color: "teal"}}>
                  Google play{" "}
                </a>{" "}
                en zoek naar de online Bibliotheek app.
              </p>{" "}
            </li>
            <li className="instructionsListItem">
              {" "}
              <RiNumber2 style={{ fontSize: "30px", margin: "10%", color: "teal" }} />
              <h3 style={{ margin: "5%" }}>Log in </h3>
              <p> Gebruik je pasnummer om in te loggen. </p>
              <p>Deze staat op je OBA-pas
                en begint met het cijfer '22000...'. </p>
                <p> Je geboortedatum is je
                wachtwoord (ddmmjjjj).
              </p>
            </li>{" "}
            <li className="instructionsListItem">
              <RiNumber3 style={{ fontSize: "30px", margin: "10%", color: "teal" }} />
              <h3 style={{ margin: "5%" }}>Lezen en luisteren </h3>
              <p>Nu kun je e-books en luisterboeken uitzoeken en lenen.</p>
            </li>
          </ul>
        </div>
      </div>
   
  );
};

export default EbooksLuisterBoeken;
