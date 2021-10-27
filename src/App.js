import React, { useState } from "react";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { FontProvider } from "./components/FontContext";
import "./Sass/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResultsBooks from './pages/searchResultsBooks/SearchResultsBooks'
import Activiteiten from "./pages/Activiteiten";
import Boeken from "./pages/Boeken";
import Home from "./pages/Home";
import Maatje from "./pages/Maatje";
import PassendLezen from "./pages/PassendLezen";
import EbooksLuisterBoeken from "./pages/EbooksLuisterBoeken";


const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = { fontSize, setFontSize };

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
              <Route exact path="/searchResultsbooks" component={SearchResultsBooks}></Route>
              <Route exact path="/maatje" component={Maatje}></Route>
              <Route exact path="/passendlezen" component={PassendLezen}></Route>
              <Route exact path="/ebooksluisterboeken" component={EbooksLuisterBoeken}></Route>
            </Switch>
          </div>
        </Router>
      </FontProvider>
    </>

  );
};

export default App;
