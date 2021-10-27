import { useState } from "react"
import BookDetails from "./BookDetails"

const Book = ({ title, omslagafbeeldingen, author, publisher, language, series, description, publishYear, topicalSubjects }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (

        <article >
            <button className="sliderImage" onClick={() => setIsOpen(true)}> <img src={omslagafbeeldingen} alt={"cover picture of " + title} /> 
            <h5>{title}</h5>
            </button>
            
            <BookDetails 
            omslagafbeeldingen={omslagafbeeldingen}
            title={title} 
            author={author}
            publisher={publisher}
            language={language}
            series={series}
            description={description}
            topicalSubjects={topicalSubjects}
            publishYear={publishYear}
            open={isOpen} onClose={() => setIsOpen(false)}>
            
            </BookDetails>
        </article>
    )
}

export default Book

