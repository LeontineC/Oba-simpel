import React, {useContext} from "react";
import {FontContext} from '../components/FontContext';

const PassendLezen = () => {
    const [fontSize] = useContext(FontContext);

    return (
        <div className="passendLezen"  style={{fontSize:`${fontSize}px`, marginTop: "30vw"}}>
            <p>Passend Lezen

Je hebt geen letters nodig om te kunnen lezen. Een goed verhaal zit tussen je oren, speelt zich af in je eigen fantasie. Daarom heeft de OBA ook gesproken boeken. Op www.passendlezen.nl vind je ruim 80.000 van zulke boeken in de meest uiteenlopende genres, van klassiekers tot actuele titels. En allemaal exclusief voor mensen met een leesbeperking.

Voor leden met een leesbeperking
Gesproken boeken zijn speciaal ontwikkeld voor alle leden die blind, slechtziend of dyslectisch zijn. Maar ook als je een andere beperking hebt waardoor lezen niet of moeilijk gaat, kun je gebruik maken van gesproken boeken.

Wat zijn gesproken boeken?
Veel boeken zijn tegenwoordig verkrijgbaar als luisterboek. Hoewel een gesproken boek en een luisterboek veel op elkaar lijken, zijn ze niet helemaal hetzelfde. Gesproken boeken zijn exclusief beschikbaar voor mensen met een leesbeperking en zijn volledig afgestemd op hun wensen. Zo worden de boeken op een rustig tempo ingesproken zonder te veel intonatie. Ook kun je door een gesproken boek navigeren om bijvoorbeeld naar een volgend hoofdstuk te gaan.

Verklaring leesbeperking
Om gebruik te maken van de gesproken boeken, moet je bij het inschrijven op de website aangeven dat je een leesbeperking hebt. Medewerkers van Bibliotheekservice Passend Lezen nemen contact met je op om de gegevens en de verklaring te bevestigen. Meer informatie over de inschrijfvoorwaarden vind je op www.passendlezen.nl

Hoe werkt het?
Voor leden van de Bibliotheek is gebruik maken van de gesproken boeken kosteloos en heel eenvoudig. Klik hier om in te loggen met jouw lidmaatschapsgegevens van de Bibliotheek. Je krijgt dan toegang tot de ruim 80.000 gesproken boeken. Zet de titels die je wilt lezen op het boekenplankje. Op het plankje passen maximaal 15 titels die je zo lang mag lenen als je wilt. Je kunt de boeken vervolgens streamen en afspelen op een pc, tablet of mobiele telefoon. Je hebt hiervoor wel een internetverbinding nodig.

Meer informatie
Ga naar www.passendlezen.nl
</p>
        </div>
    )
}

export default PassendLezen
