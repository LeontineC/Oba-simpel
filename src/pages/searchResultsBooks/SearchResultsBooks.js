import { useEffect, useState } from "react"
import Book from "../../components/Book"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import GenreBookFilter from "./GenreBookFilter";


const Boeken = () => {
    const [booksList, setBooksList] = useState()
    const [loading, setLoading] = useState('1')
    const [filteredBooks, setFilteredBooks] = useState()
    const [pageNumb, setPageNumb] = useState(1)
    const [genreName, setGenreName] = useState("random/")
    const [checked, setChecked] = useState("random/")
    const [ad, setAd] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [count, setCount] = useState()

    useEffect(() => {
        getBooks()
    }, [pageNumb, genreName, ad])
    const getBooks = () => {
        setFilteredBooks([])
        setLoading(true)
        setBooksList([])
        const value = searchValue.length > 0 ? searchValue : ''
        const url = `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/${genreName + ad}/page/${pageNumb}`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(results => {
                setLoading(false)
                setBooksList(results.boeken)
                setCount(results.meta.count / 20)
            })
    }
    const nextPage = () => {
        setPageNumb(prevState => prevState + 1)
        console.log(pageNumb)
    }
    const previousPage = () => {
        setPageNumb(prevState => prevState - 1)
        console.log(pageNumb)
    }
    const defineGenre = (e) => {
        setChecked(e.target.name)
        setPageNumb(prevState => 1)
        setGenreName(e.target.name)
        setAd('')
        setSearchValue('')
    }
    const onchange = (e) => {
        setSearchValue(e.target.value)
    }
    const onzoek = (e) => {
        setGenreName(prevState => prevState + searchValue)
        setAd('')
        setPageNumb(1)

    }


    return (
        <>

            <div className="inputDiv" >
                <input className="inputBooksPage" placeholder="Waar ben je naar op zoek?" onChange={onchange} value={searchValue}></input>
                <button className="zoekFilterBtn" onClick={onzoek}>Zoek</button>
            </div>

            <div className="div-genreFilterBtn">
                <button onClick={defineGenre} style={checked === "random/" ? { backgroundColor: "gray", textDecoration: "underline" } : null} className="typeFilterBtn" name="random/">willekeurig</button>
                <button onClick={defineGenre} style={checked === "largetype/" ? { backgroundColor: "gray", textDecoration: "underline" } : null} className="typeFilterBtn" name="largetype/">grote letters </button>
                <button onClick={defineGenre} style={checked === "audiobook/" ? { backgroundColor: "gray", textDecoration: "underline" } : null} className="typeFilterBtn" name="audiobook/">audio boeken</button>
                <button onClick={defineGenre} style={checked === "dvdvideo/" ? { backgroundColor: "gray", textDecoration: "underline" } : null} className="typeFilterBtn" name="dvdvideo/">dvdvideo</button>
                <button onClick={defineGenre} style={checked === "book/" ? { backgroundColor: "gray", textDecoration: "underline" } : null} className="typeFilterBtn" name="book/">boeken</button>
                <button onClick={defineGenre} style={checked === "ebook/" ? { backgroundColor: "gray", textDecoration: "underline" } : null} className="typeFilterBtn" name="ebook/">e-boek</button>
            </div>



            {booksList && booksList && <GenreBookFilter books={booksList} searchValue={searchValue} setSearchValue={setSearchValue} ad={ad} setAd={setAd} genreName={genreName} setGenreName={setGenreName} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks} />}


            <section >
                {loading === false ?
                    <div >
                        {filteredBooks && filteredBooks.length > 0 ?
                            <div className="search_results">
                                
                                {filteredBooks && filteredBooks.map(({ id, title, omslagafbeeldingen, auteurs, uitgever, taal, series, beschrijving, uitgave_jaar, topical_subjects }) => (
                                    <Book key={id}
                                        title={title}
                                        omslagafbeeldingen={omslagafbeeldingen[1]}
                                        autho                                        language={taal}
                                        series={series}r={auteurs}
                                        publisher={uitgever}

                                        description={beschrijving}
                                        publishYear={uitgave_jaar}
                                        topicalSubjects={topical_subjects}
                                    />)
                                )}
                                
                            {booksList.length > 0 ? <div div className="pages">
                                    <button className="nextPreviousBtn" disabled={pageNumb == 1 ? true : false} onClick={previousPage}>vorige pagina</button><h2>{booksList.length == 0 ? <h2>Geen Resultaten</h2> : null}</h2><button disabled={count > pageNumb ? true : false} className="nextPreviousBtn" onClick={nextPage}>volgende pagina</button></div> : null}
                            </div>
                            :
                            <div className="search_results">
                                


                                {booksList && booksList.map(({ id, title, omslagafbeeldingen, auteurs, uitgever, taal, series, beschrijving, uitgave_jaar, topical_subjects }) => (

                                    <Book key={id}
                                        title={title}
                                        omslagafbeeldingen={omslagafbeeldingen[1]}
                                        author={auteurs}
                                        publisher={uitgever}
                                        language={taal}
                                        series={series}
                                        description={beschrijving}
                                        publishYear={uitgave_jaar}
                                        topicalSubjects={topical_subjects}
                                    />)

                                )}
                                
                                {booksList ? <div className="pages">
                                    <button className="nextPreviousBtn" disabled={pageNumb == 1 ? true : false} onClick={previousPage}>vorige pagina</button><h2>{booksList.length == 0 ? <h2>Geen Resultaten</h2> : null}</h2><button disabled={count < pageNumb ? true : false} className="nextPreviousBtn" onClick={nextPage}>volgende pagina</button></div> : null}
                            </div>
                        }
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
