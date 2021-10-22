import {FontContext} from '../components/FontContext';
import Searchbar from '../components/Searchbar'
import React, { useState, useEffect, useContext } from "react";

const Boeken = () => {
    const [fontSize] = useContext(FontContext);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [array, setArray] = useState();

    useEffect(() => {
        fetch(`https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/audiobook/`
        )
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              setIsLoaded(true);
              setItems(result.boeken);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      


    return (
        <div>
              <p style={{marginTop:"30vw", fontSize:`${fontSize}px`}}> Boeken!</p>
             <Searchbar placeholder="Waar bent u naar opzoek?" data={items} />
            <p style={{marginTop:"30vw", fontSize:`${fontSize}px`}}> Boeken!</p>
           
        </div>
    )
}

export default Boeken
