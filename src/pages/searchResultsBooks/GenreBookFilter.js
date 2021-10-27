import React, { useState, useEffect } from 'react'

const GenreBookFilter = ({ books, setFilteredBooks, setGenreName, genreName, ad, setAd, setSearchValue, searchValue }) => {
    const [genres, setGenres] = useState([])
    const [numb, setNumb] = useState(books.length)

    useEffect(() => {
        getGenres()
        // console.log(books)
    }, [books])
    const getGenres = () => {
        const genres2 = []
        if (books.length > 0) {
            books.map(book => {
                if (genres2.indexOf(book.boek_genre) == -1)
                    genres2.push(book.boek_genre)
            })
        }
        setGenres(genres2)
    }
    const booksFilter = (e) => {
        // console.log(e.target.name)
        // const filteredbooks = []
        // books.forEach(element => {
        //     if(element.boek_genre == e.target.name)
        //         filteredbooks.push(element)
        // });
        // setFilteredBooks(prevState => filteredbooks)
        // console.log(filteredbooks.length)
        // const ss = genreName.splice(genreName.length-1, 1)
        // console.log("ss: "+ss)
        // setGenreName(prevState => genreName + e.target.name + '/')
        if(searchValue)
            setAd("-" + e.target.name + '/')
        else
            setAd(e.target.name + '/')
    }

    return (
        <div className="div-genreFilterBtn">
            {ad == '' ?
                <div>
                    {genres && genres.map(genre => {
                        return (


                            <button onClick={booksFilter} className="genreFilterBtn" name={genre}>{genre === "" ? "Anders" : genre}</button>

                        )
                    })}
                </div>

                :
                <button style={{backgroundColor: "red"}} className='genreFilterBtn'  disabled={true}>{ad}</button>   }     
        </div>
    )

}
export default GenreBookFilter