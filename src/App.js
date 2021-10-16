import React, {useState} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { FontProvider } from './components/FontContext'
import './Sass/main.css'
import {BrowserRouter as Router , Route, Switch } from "react-router-dom";
import Activiteiten from './pages/Activiteiten'
import Boeken from './pages/Boeken'

const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = {fontSize, setFontSize};

  return (
    <>
    <Router>
    <div> 
   <FontProvider>
    <Navbar />
    <Header />
   </FontProvider>
    
   
    </div>
    </Router>
    </>
  )
}

export default App


