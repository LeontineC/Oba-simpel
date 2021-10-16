import React, {useState} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { FontProvider } from './components/FontContext'
import './Sass/main.css'

const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = {fontSize, setFontSize};

  return (
    <div> 
   <FontProvider>
    <Navbar />
    <Header />
   </FontProvider>
    
   
    </div>
  )
}

export default App


