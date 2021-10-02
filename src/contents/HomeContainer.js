import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "./Home";
import Wedding from "./Wedding";
import Accommodations from './Accommodations';
import RSVP from './RSVP';
import Registry from './Registry';
import MobileNavBar from "../components/MobileNavBar";
import Investors from "./Investors";

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
        this.currentUrl = window.location.pathname
    }

    getCurrentUrl = () => {
        // console.log(window.location.pathname);
        let result;
        if (window.location.pathname === "/") {
             result = "/home";
        } else
        result = window.location.pathname;
        return result;
    }

    
    
    render() {
        return(
            <div className="condivHome"

            style={{backgroundImage: `url(${this.props.background}.jpg)`,
            // style={{backgroundImage: `url(${this.getCurrentUrl()}.jpg)`,
            backgroundSize: 'Cover'
            }}>
                <Router>
                {this.props.mobileFlag ? (
                  <MobileNavBar activeitem={this.activeitem}/>
                ) : (
                  <Navbar activeitem={this.activeitem}/>
                )
                }
                <Route exact path="/">
                <Home />
                </Route>
                <Route path="/wedding">
                <Wedding />
                </Route>
                <Route path="/accommodations">
                <Accommodations />
                </Route>
                <Route path="/registry">
                <Registry />
                </Route>
                <Route path="/rsvp">
                <RSVP />
                </Route>
                <Route path="/investors">
                <Investors />
                </Route>
                </Router>
            </div>
        )
    }
}

export default HomeContainer