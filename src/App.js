import React, { useEffect, useState } from 'react';
import './App.css';
import HotelBanner from './components/HotelBanner';
import HomeContainer from "./contents/HomeContainer";
import Login from "./contents/Login";
import pw from "./pw.json"

function App() {
  
  const [windowDimension, setWindowDimension] = useState(null);
  const [loggedIn, logSessionIn] = useState(false);
  const [background, setBackground] = useState('');

  const getCurrentUrl = () => {
    let result;
    if (window.location.pathname === "/") {
         result = "/home";
    } else
    result = window.location.pathname;
    setBackground(result);
    return result;
  }
  
  useEffect(() => {
    setBackground(getCurrentUrl());
    window.addEventListener("click", getCurrentUrl);
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
        <HotelBanner />
        <HomeContainer mobileFlag={isMobile} background={background}/>
        {/* {loggedIn ? (<HomeContainer background={background} mobileFlag={isMobile}/>) : 
        (<Login onSubmit={handleSubmit}/>)} */}
      </div>
  )
}


export default App;