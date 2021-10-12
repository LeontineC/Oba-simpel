import React from "react"
import ReactDom from "react-dom"
import { useState, useEffect } from "react"


const BookDetails = ({ open, children, onClose, title, author, omslagafbeeldingen, publisher, language, series, description}) => {


    if (!open) return null
    

    return ReactDom.createPortal(
        <>
        <div className="overlay"/>
        <div className="modal">
        <button 
        onClick={onClose} 
        >Close Modal </button>
            {children}
            <img src={omslagafbeeldingen} alt={"cover picture of " + title} />
            <p>Titel: {title}</p>
            <p>Auteur: {author}</p>
            <p>Uitgever: {publisher}</p>
            <p>Language: {language}</p>
            <p>Series: {series}</p>
            <p>Description: {description}</p>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default BookDetails
