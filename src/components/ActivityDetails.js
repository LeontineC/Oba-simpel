import React from "react"
import ReactDom from "react-dom"
import { FaWindowClose } from "react-icons/fa"


const ActivityDetails = ({ location, tijd, datum, open, children, onClose, title, author, omslagafbeeldingen, publisher, language, series, description }) => {


    if (!open) return null


    return ReactDom.createPortal(
        <>
            <div className="overlay" />
            <div className="modal">
                <button class="close-window"
                    onClick={onClose}
                ><FaWindowClose class="icon" />Sluiten </button>
                {children}

                {children}
                <h3>{title}</h3>
                <h4>{datum}</h4>
                <h5>{tijd}</h5>
                <div className="modal_display">
                    <div>
                        <img className="modal_image" src={omslagafbeeldingen} alt={"cover picture of " + title} />
                    </div>
                    <div className="modal_details">
                        <p><span>{description}</span></p>
                        <p>Neem een kijkje in de OBA agenda en reserveer vooraf je plekje. Blijf je liever nog even thuis?
Dan hebben we een leuk online aanbod voor je.</p>
                        <button>Aanmelden</button>
                        <p>Op dit moment kun je alleen op afspraak komen.</p>
                        <p>Bereid je voor op je bezoek aan de OBA en doe de gezondheidscheck voordat je naar
de OBA komt.</p>
<p>{location} | Osdorpplein 16 | 1068 EL AMSTERDAM

T: 020-5230900 | E: osdorp@oba.nl</p>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ActivityDetails
