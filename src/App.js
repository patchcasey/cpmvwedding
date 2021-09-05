import React, { Component } from 'react';
import './App.css';


// import beachpic_uncropped from "./img/beachpic_uncropped.jpg";
// import modpic from "./img/modpic.jpg"


import HomeContainer from "./contents/HomeContainer";

class App extends Component {
  
  render() {

  return (
      <div className="App">
        <HomeContainer />
      </div>
  )
}
}

export default App;