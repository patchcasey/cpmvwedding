import React, { useEffect, useState } from 'react';
import './App.css';


// import beachpic_uncropped from "./img/beachpic_uncropped.jpg";
// import modpic from "./img/modpic.jpg"


import HomeContainer from "./contents/HomeContainer";

function App() {
  
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
      <div className="App">
        <HomeContainer mobileFlag={isMobile}/>
      </div>
  )
}


export default App;