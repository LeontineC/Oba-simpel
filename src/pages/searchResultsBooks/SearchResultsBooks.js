import { useEffect, useState } from "react"
import Book from "../../components/Book"
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import GenreBookFilter from "./GenreBookFilter";


const Boeken = () => {
    const [booksList, setBooksList] = useState()
    const [loading, setLoading] = useState('1')

    // useEffect(() => {
    //     fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/beer")
    //         .then(response => response.json())
    //         .then(results => setBooksList(results.book.boeken))
    // }, [])
    const getBooks = (e) => {
        setLoading(true)
        setBooksList([])
        fetch(`https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/${e.target.name}`)
            .then(response => response.json())
            .then(results => {
                setLoading(false)
                setBooksList(results.boeken)
                // console.log(results.boeken)
            })
    }

    // if (!booksList) return null

    // console.log(booksList)
    return (
        <>
            <div className="div-genreFilterBtn">
                <button onClick={getBooks} className="genreFilterBtn" name="largetype">largetype</button>
                <button onClick={getBooks} className="genreFilterBtn" name="audiobook">audio boeken</button>
                <button onClick={getBooks} className="genreFilterBtn" name="dvdvideo">dvdvideo</button>
                <button onClick={getBooks} className="genreFilterBtn" name="book">book</button>
                <button onClick={getBooks} className="genreFilterBtn" name="ebook">e-book</button>
            </div>
            {booksList && booksList && <GenreBookFilter books={booksList} />} 
            
                
                    <section className="search_results">
                    {loading === false ?
                        <div className="result_card">
                            {booksList && booksList.map(({ id, title, omslagafbeeldingen, auteurs, uitgever, taal, series, beschrijving }) => (
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
                        : 
                        loading === true ? 
                        <ClipLoader color={'rgb(1, 117, 113)'} loading={loading} css={css`display: block;margin: 0 auto;`} size={150} />
                         : 
                         <></>
                        }
                    </section>

               
                

        </>
    )
}

export default Boeken
