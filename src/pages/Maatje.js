import React, {useContext} from "react";
import {FontContext} from '../components/FontContext';

const Maatje = () => {
    const [fontSize] = useContext(FontContext);

  return (
    <div className="maatje" style={{fontSize:`${fontSize}px`, marginTop: "30vw"}}>
      <h1>Iedere maand een stapel favoriete boeken, cd’s of films thuis?</h1>
      <p>
        Zou u het fijn vinden om iedere maand een eigen vertrouwde vrijwilliger
        thuis te ontvangen, die een stapel fijne boeken, films, cd’s of
        luisterboeken uit de OBA voor u meebrengt?{" "}
      </p>
      <h3>Dan is OBA Maatje iets voor u!</h3>
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
      <p>ga naar het inschrijfformulier</p>
    </div>
  );
};

export default Maatje;
