import React, {useContext} from 'react';
import {FontContext} from '../components/FontContext';

const Home = () => {
    const [fontSize] = useContext(FontContext);

    return (
        <div>
            <p style={{fontSize:`${fontSize}px`}}> Home!</p>
        </div>
    )
}

export default Home
