import React, {useContext} from 'react'
import {FontContext} from '../components/FontContext';

const Boeken = () => {
    const [fontSize] = useContext(FontContext);

    return (
        <div>
            <p style={{marginTop:"30vw", fontSize:`${fontSize}px`}}> Boeken!</p>
        </div>
    )
}

export default Boeken
