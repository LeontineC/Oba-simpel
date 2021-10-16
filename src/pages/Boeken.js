import React, {useContext} from 'react'
import {FontContext} from '../components/FontContext';

const Boeken = () => {
    const [fontSize] = useContext(FontContext);

    return (
        <div>
            <p style={{fontSize:`${fontSize}px`}}> Boeken!</p>
        </div>
    )
}

export default Boeken
