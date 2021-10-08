import BookDetails from "../components/BookDetails"
import { useEffect, useState } from "react"

const Boeken = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/carmen-of-the-rings")
            .then(response => response.json())
            .then(results => console.log(results.boeken))
    }, [])

    return (
        <div className="book_row">
            <div onclick={() => console.log('clicked')}>
                <button onClick={() => setIsOpen(true)}> <img src="https://cover.biblion.nl/coverlist.dll?doctype=morebutton&bibliotheek=oba&style=0&ppn=40808443X&isbn=9789029091848&lid=&aut=&ti=&size=120" alt="Honderd jaar eenzaamheid : roman / Gabriel García Márquez" /> </button>

                <BookDetails open={isOpen} onClose={() => setIsOpen(false)}>
                </BookDetails>
            </div>

            <div onclick={() => console.log('clicked')}>
                <button onClick={() => setIsOpen(true)}> <img src="https://cover.biblion.nl/coverlist.dll?doctype=morebutton&bibliotheek=oba&style=0&ppn=83107034X&isbn=9789028204065&lid=&aut=&ti=&size=120" alt="The idiot / Fyodor Dostoevsky" /> </button>

                <BookDetails open={isOpen} onClose={() => setIsOpen(false)}>
                </BookDetails>
            </div>

            <div onclick={() => console.log('clicked')}>
                <button onClick={() => setIsOpen(true)}> <img src="https://cover.biblion.nl/coverlist.dll?doctype=morebutton&bibliotheek=oba&style=0&ppn=325814244&isbn=9789044517163&lid=&aut=&ti=&size=120" alt="De vos was de jager / Herta Müller" /> </button>

                <BookDetails open={isOpen} onClose={() => setIsOpen(false)}>
                </BookDetails>
            </div>

        </div>
    )
}

export default Boeken
