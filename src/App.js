import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About"

class App extends Component {

  constructor(props) {
    super(props);
    
    /* Prepopulate the state of the component with image data for subsequnet the render */
    this.state = {

        section : {
            stops : [
                { imagePath : 'https://wallpaperbrowse.com/media/images/background-wallpapers-26.jpg' },
                { imagePath : 'https://wallpaperbrowse.com/media/images/704532.jpg' },
                { imagePath : 'https://wallpaperbrowse.com/media/images/abstract-background-design_1297-88.jpg' }
            ]
        }
    }
  }

  render() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </Router>
  )
}
}

export default App;