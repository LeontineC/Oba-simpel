import React, {useContext} from 'react';
import {FontContext} from './FontContext';


const Header = () => {
    const [fontSize] = useContext(FontContext);
    
    return (
        <div>
               
               <p style={{fontSize:`${fontSize}px`}}> Hola mundo!</p>
        </div>
    )
}

export default Header


