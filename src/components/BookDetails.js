import React from "react"
import ReactDom from "react-dom"
import { FaWindowClose } from "react-icons/fa"


const BookDetails = ({ open, children, onClose, title, author, omslagafbeeldingen, publisher, language, series, description}) => {


    if (!open) return null
    

    return ReactDom.createPortal(
        <>
        <div className="overlay"/>
        <div className="modal">
        <button class="close-window"
        onClick={onClose} 
        ><FaWindowClose class="icon"/>Sluiten </button>
            {children}
            <h3>{title} bij {author.slice(author.indexOf(',')+1, author.length)} {author.slice(0, author.indexOf(','))}</h3>
            <div className="modal_display">
            <div className="modal_image">
            <img src={omslagafbeeldingen} alt={"cover picture of " + title} />
            </div>
            <div className="modal_details">
            <p>Titel: {title}</p>
            <p>Auteur: {author}</p>
            <p>Uitgever: {publisher}</p>
            <p>Taal: {language}</p>
            <p>Reeks: {series}</p>
            <p>Beschrijving: {description}</p>
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default BookDetails
