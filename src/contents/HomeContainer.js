import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import beachpic_uncropped from "../img/beachpic_uncropped.jpg";
import modpic from "../img/modpic.jpg"

import Navbar from "../components/Navbar";
import Home from "../contents/Home";
import About from "../contents/About";

function getTest(test) {
    return test.state.NavItemActive
}

class HomeContainer extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        };
        this.activeitem=(x)=>
        {
            if (this.state.NavItemActive.length > 0) {
                document.getElementById(this.state.NavItemActive).classList.remove('active');
            }
            this.setState({ 'NavItemActive': x }, () => {
                document.getElementById(this.state.NavItemActive).classList.add('active');
            });
        };
        this.backgrounds={
            'Home': beachpic_uncropped,
            'About': modpic
        }
    }   

    
    
    render() {
        return(
            <div className="condivHome">

            {/* style={{backgroundImage: `url(${this.state.stops.aboutBg})`,
            backgroundSize: 'Cover'
            }}> */}
            {console.log(this.state.NavItemActive)}
                <Router>
                <Navbar activeitem={this.activeitem}/>
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/about">
                <About />
                </Route>
                </Router>
            </div>
        )
    }
}

export default HomeContainer