<<<<<<< HEAD
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
=======
import React, { useState } from "react";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { FontProvider } from "./components/FontContext";
import "./Sass/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activiteiten from "./pages/Activiteiten";
import Boeken from "./pages/Boeken";
import Home from "./pages/Home";

const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = { fontSize, setFontSize };
>>>>>>> navbar

  return (
    <>
      <FontProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/boeken" component={Boeken}></Route>
              <Route exact path="/activiteiten" component={Activiteiten}></Route>
            </Switch>
          </div>
        </Router>
      </FontProvider>
    </>
  );
};

export default App;
