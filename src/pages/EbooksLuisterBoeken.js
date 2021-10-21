import React, {useContext} from "react";
import {FontContext} from '../components/FontContext';

const EbooksLuisterBoeken = () => {
    const [fontSize] = useContext(FontContext);

    return (
        <div className="ebooksLuisterBoeken" style={{fontSize:`${fontSize}px`, marginTop: "30vw"}}>
            <p>Hoe leen je e-books en luisterboeken?
Als lid van de OBA heb je toegang tot duizenden e-books en luisterboeken uit de landelijke online Bibliotheek. In een paar stappen lees je ze op je smartphone of tablet via de online Bibliotheek-app. Lees hier alles over deze app en probeer hem meteen uit!

Wil je e-books van de bibliotheek lezen op je e-reader?
Bekijk hoe het werkt op onlinebibliotheek.nl

Download de app
Ga naar de App Store of Google play en zoek naar de online Bibliotheek app.

 
Log in
Gebruik je pasnummer om in te loggen. Deze staat op je OBA-pas en begint met het cijfer '22000...'. Je geboortedatum is je wachtwoord (ddmmjjjj).
 
Lezen en luisteren
Nu kun je e-books en luisterboeken uitzoeken en lenen.</p>
            
        </div>
    )
}

export default EbooksLuisterBoeken
