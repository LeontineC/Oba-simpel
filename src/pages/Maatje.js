import React, { useContext } from "react";
import { FontContext } from "../components/FontContext";

const Maatje = () => {
  const [fontSize] = useContext(FontContext);

  return (
    <div className="maatje" style={{ fontSize: `${fontSize}px` }}>
      <img
        // src="https://images.unsplash.com/photo-1515125520141-3e3b67bc0a88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
      src="https://images.pexels.com/photos/7034643/pexels-photo-7034643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt=""
      />
      <div className="text">
      <h1>Iedere maand een stapel favoriete boeken, cd’s of films thuis?</h1>
      <p>
        Zou u het fijn vinden om iedere maand een eigen vertrouwde vrijwilliger
        thuis te ontvangen, die een stapel fijne boeken, films, cd’s of
        luisterboeken uit de OBA voor u meebrengt?{" "}
      </p>
      <h2>Dan is OBA Maatje iets voor u!</h2>
      <p>
        U maakt kennis met een OBA Maatje-vrijwilliger. Klikt het, dan komt uw
        eigen vertrouwde OBA Maatje eens per maand gezellig langs en brengt een
        pakket mee dat is samengesteld volgens uw wensen.
      </p>
      <h2>Hoe werkt het?</h2>
      <p>
        Als OBA-lid kunt u zich aanmelden door een mail met uw naam, adres en
        telefoonnummer te sturen naar obamaatje@oba.nl. U kunt ook bellen naar
        020 - 52 30 900. Een medewerker van de OBA neemt dan contact met u op om
        een afspraak te maken voor een intakegesprek.
      </p>
      <h2>Bent u nog geen OBA-lid?</h2>
      <p>Schrijf u dan eerst in:</p>
      <a
        href="https://www.oba.nl/service/word-lid.html"
        className="anchorMaatje"
      >
        <p>ga naar het inschrijfformulier</p>
      </a>
      </div>
    </div>
  );
};

export default Maatje;
