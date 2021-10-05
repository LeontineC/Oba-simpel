import React, { useState, useEffect } from 'react'

const ApiData = () => {
 const [ data, setData] = useState();
  
 useEffect (() => {
     fetch ( `https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/activiteiten`)
     .then((response) => response.json())
     .then((newData) => setData(newData));
 }, []);

 if (!data) return null;
    


  console.log(data[0].title)

    return (
        <div>
            <p>its working</p>
        </div>
    )
}

export default ApiData
