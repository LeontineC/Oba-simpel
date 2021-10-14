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
            <h3>{title}</h3>
            <h5>{author.slice(author.indexOf(',')+1, author.length)} {author.slice(0, author.indexOf(','))}</h5>
            <div className="modal_display">
            <div className="modal_image">
            <img src={omslagafbeeldingen} alt={"cover picture of " + title} />
            </div>
            <div className="modal_details">
            <p> <span>Titel: </span>{title}</p>
            <p><span>Auteur: </span>{author}</p>
            <p><span>Uitgever: </span>{publisher}</p>
            <p><span>Taal: </span>{language}</p>
            <p><span>Reeks: </span>{series}</p>
            <p><span>Beschrijving: </span>{description}</p>
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default BookDetails
