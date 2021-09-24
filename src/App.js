import React, { useEffect, useState } from 'react';
import './App.css';

import HomeContainer from "./contents/HomeContainer";
import Login from "./contents/Login";
import pw from "./pw.json"

function App() {
  
  const [windowDimension, setWindowDimension] = useState(null);
  const [loggedIn, logSessionIn] = useState(false);

  const handleSubmit = data => {
    if (data['password'] === pw['password']) {
      logSessionIn(prev => !prev)
    }

    //use logSessionIn here
    };

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
        {/* {loggedIn ? (<HomeContainer mobileFlag={isMobile}/>) : 
        (<Login onSubmit={handleSubmit}/>)} */}
      </div>
  )
}


export default App;