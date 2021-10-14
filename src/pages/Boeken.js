import { useEffect, useState } from "react"
import Book from "../components/Book"

const Boeken = () => {
    const [booksList, setBooksList] = useState()

    useEffect(() => {
        fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/beer")
            .then(response => response.json())
            .then(results => setBooksList(results.boeken))
    }, [])

    if (!booksList) return null

    
return (
    <>
        <section className="search_results">
            <div className="result_card">
                {booksList.map(({id, title, omslagafbeeldingen, auteurs, uitgever, taal, series, beschrijving }) => (
                    <Book key={id}
                    title={title} 
                    omslagafbeeldingen={omslagafbeeldingen[1]} 
                    author={auteurs}
                    publisher={uitgever}
                    language={taal}
                    series={series}
                    description={beschrijving}
                    />)
                )}
            </div>
        </section>
    </>
)
                }

export default Boeken
