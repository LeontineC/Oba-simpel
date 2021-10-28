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
                <div className="time_details">
                    <h4>{datum}</h4>
                    <h5>{tijd}</h5></div>

                <div className="modal_display">
                    <div>
                        <img className="modal_image_act" src={omslagafbeeldingen} alt={"cover picture of " + title} />
                    </div>
                    <div className="modal_details activity_modal">
                        <p><span>{description}</span></p>
                        <span className="register">Aanmelden</span>
                        <p>Op dit moment kun je alleen op afspraak komen.</p>
                        <p className="italics">Bereid je voor op je bezoek aan de OBA en doe de gezondheidscheck voordat je naar
                            de OBA komt.</p>
                        <button className="register_button">Aanmelden</button>
                        <p>{location} | Osdorpplein 16 | 1068EL {location.slice(4)}</p>

                        <span>T: 020-5230900 | E: oba@oba.nl</span>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ActivityDetails
