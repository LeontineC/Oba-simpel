import React from "react"
import ReactDom from "react-dom"
import { FaWindowClose } from "react-icons/fa"


const BookDetails = ({ open, children, onClose, title, author, omslagafbeeldingen, publisher, language, series, description, publishYear, topicalSubjects}) => {


    if (!open) return null
    

    return ReactDom.createPortal(
        <>
        <div className="overlay"/>
        <div className="modal">
        <button class="close-window"
        onClick={onClose} 
        ><FaWindowClose class="icon"/>sluiten </button>
            {children}
            <h3>{title}</h3>
            <h5>{author.slice(author.indexOf(',')+1, author.length)} {author.slice(0, author.indexOf(','))}</h5>
            <div className="modal_display">
            <div className="modal_image">
            <img src={omslagafbeeldingen} alt={"cover picture of " + title} />
            </div>
            <div className="modal_details">
            {title ? <p><span>Titel: </span>{title}</p> : null}
            {/* <p> <span>Titel: </span>{title}</p> */}
            {author ? <p><span>Auteur: </span>{author}</p> : null}
            {/* <p><span>Auteur: </span>{author}</p> */}
            {publisher ? <p><span>Uitgever: </span>{publisher}</p> : null}
            {/* <p><span>Uitgever: </span>{publisher}</p> */}
            {language ? <p><span>Taal: </span>{language}</p> : null}
            {/* <p><span>Taal: </span>{language}</p> */}
            {series  ? <p><span>Reeks: </span>{series}</p> : null}
            {/* <p><span>Reeks: </span>{series}</p> */}
            {description ? <p><span>Beschrijving: </span>{description}</p> : null}
            {/* <p><span>Beschrijving: </span>{description}</p> */}

            
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default BookDetails
