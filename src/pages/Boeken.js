import BookDetails from "../components/BookDetails"
import { useEffect, useState } from "react"

const Boeken = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [booksList, setBooksList] = useState()

    useEffect(() => {
        fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/zoon")
            .then(response => response.json())
            .then(results => setBooksList(results.boeken))
    }, [])

    if (!booksList) return null

    console.log(booksList)
    console.log(booksList[0].title)
    

    return (
        <>
        <section className="search_results">
        <div className="result_card">
            {booksList.map(({title, omslagafbeeldingen}) => (
                <article onclick={() => console.log('clicked')}>
                <h3>{title}</h3>
                <button onClick={() => setIsOpen(true)}> <img src={omslagafbeeldingen[1]} alt={"cover picture of " + title}/> </button>
                <BookDetails open={isOpen} onClose={() => setIsOpen(false)}>
                </BookDetails>
            </article>
            ))}
        </div>
        </section>
        </>

    )
}

export default Boeken
