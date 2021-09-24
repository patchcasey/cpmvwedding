import React, { useEffect, useState } from 'react';
import './App.css';

import HomeContainer from "./contents/HomeContainer";
import Login from "./contents/Login";
import pw from "./pw.json"

function App() {
  
  const [windowDimension, setWindowDimension] = useState(null);
  const [loggedIn, logSessionIn] = useState(false);
  const [background, setBackground] = useState('');

  const getCurrentUrl = () => {
    console.log(window.location.pathname)
    let result;
    if (window.location.pathname === "/") {
         result = "/home";
    } else
    result = window.location.pathname;
    return result;
  }

  useEffect(() => {
    window.addEventListener("url", getCurrentUrl);
  }, []);

  const handleSubmit = data => {
    if (data['password'] === pw['password']) {
      logSessionIn(prev => !prev);
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
        {/* {loggedIn ? (<HomeContainer background={background} mobileFlag={isMobile}/>) : 
        (<Login onSubmit={handleSubmit}/>)} */}
      </div>
  )
}


export default App;