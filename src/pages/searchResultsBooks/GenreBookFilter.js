import React, { useState, useEffect } from 'react'

const GenreBookFilter = ( books ) => {
    const [genres, setGenres] = useState([])
    const [numb, setNumb] = useState(books.books.length)
    useEffect(() => {
        getGenres()
    }, [books])
    const getGenres = () => {
        const genres2 = []
        
        if(books.books.length > 0) {
            books.books.map(book => {
                if(genres2.indexOf(book.boek_genre) == -1)
                    genres2.push(book.boek_genre)
            })
        }
        setGenres(genres2)
        console.log(genres2)
    }
    const booksFilter = () => {

    }
    return (
        <div>
            {/* <div className="div-genreFilterBtn">
                <button onClick={booksFilter} className="genreFilterBtn" name="largetype">largetype</button>
                <button onClick={booksFilter} className="genreFilterBtn" name="audiobook">audio boeken</button>
                <button onClick={booksFilter} className="genreFilterBtn" name="dvdvideo">dvdvideo</button>
                <button onClick={booksFilter} className="genreFilterBtn" name="book">book</button>
                <button onClick={booksFilter} className="genreFilterBtn" name="ebook">e-book</button>
            </div> */}
        </div>
    )

}

export default GenreBookFilter