import React, {useContext} from 'react'
import { FontContext } from '../components/FontContext'

const Activiteiten = () => {
    const [fontSize] = useContext(FontContext);

    return (
        <div>
           <p style={{fontSize:`${fontSize}px`}}> Activiteiten!</p>
        </div>
    )
}

export default Activiteiten
