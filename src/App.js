import React, {useState} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchResultsBooks from './pages/SearchResultsBooks'
import './Sass/main.css'
import { FontProvider } from './components/FontContext'


const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = {fontSize, setFontSize};

  return (
    <div> 
   <FontProvider>
    <Navbar />
    <Header />
   </FontProvider>
    <SearchResultsBooks />
      
    </div>
  );
}

export default App


