<<<<<<< HEAD
import React from 'react'
// import Header from './components/Header'
import './Sass/main.css'
import Home from './pages/Home'
=======
import React, {useState} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchResultsBooks from './pages/SearchResultsBooks'
import './Sass/main.css'
import { FontProvider } from './components/FontContext'
>>>>>>> 474a653fd8c165ce2b56f9bf2be62ee792360cfa


const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = {fontSize, setFontSize};

  return (
    <div> 
<<<<<<< HEAD
    
      <Home />
=======
   <FontProvider>
    <Navbar />
    <Header />
   </FontProvider>
    <SearchResultsBooks />
      
>>>>>>> 474a653fd8c165ce2b56f9bf2be62ee792360cfa
    </div>
  );
}

export default App


