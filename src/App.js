import React, { Component } from 'react';
import './App.css';


import beachpic_uncropped from "./img/beachpic_uncropped.jpg";
import modpic from "./img/modpic.jpg"


import HomeContainer from "./contents/HomeContainer";

class App extends Component {

  constructor(props) {
    super(props);
    
    /* Prepopulate the state of the component with image data for subsequnet the render */
    this.state = {

        stops : {
            homeBg : beachpic_uncropped,
            aboutBg : modpic
        }
    }
  }
  
  render() {
    
    // style={{backgroundImage: `url(${this.state.stops.aboutBg})`,
    //     backgroundSize: 'Cover'
    //     }}
  return (
      <div className="App">
        <HomeContainer />
      </div>
  )
}
}

export default App;