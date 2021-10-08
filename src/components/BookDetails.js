import React from "react"
import ReactDom from "react-dom"
import { useState } from "react"

// const [bookTitle, setbookTitle] = useState()


const BookDetails = ({ open, children, onClose, title }) => {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div className="overlay"/>
        <div className="modal">
        <button onClick={onClose}>Close Modal </button>
            {children}
            <p>Title: {title}</p>
            <p>Author</p>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default BookDetails
