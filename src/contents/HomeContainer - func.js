import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "./Home";
import Wedding from "./Wedding";
import Accommodations from './Accommodations';
import RSVP from './RSVP';
import Registry from './Registry';
import MobileNavBar from "../components/MobileNavBar";

const HomeContainer = (props) => {

    const [NavItemActive, setNavItemActive] = useState('')

    const activeitem = (x) => {

        //todo make activeitem work
        if (this.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }

    const getCurrentUrl = () => {
        {console.log(window.location.pathname)}
        let result;
        if (window.location.pathname === "/") {
             result = "/home";
        } else
        result = window.location.pathname;
        return result;
    }

    useEffect(() => {
        {console.log('useeffect')}
        getCurrentUrl();
    }, []);

    
    
        return(
            <div className="condivHome"

            // style={{backgroundImage: `url(${this.props.background}.jpg)`,
            style={{backgroundImage: `url(${getCurrentUrl()}.jpg)`,
            backgroundSize: 'Cover'
            }}>
                {console.log(props.background)}
                {console.log(`url(${getCurrentUrl()}.jpg)`)}
                <Router>
                {props.mobileFlag ? (
                  <MobileNavBar activeitem={activeitem}/>
                ) : (
                  <Navbar activeitem={activeitem}/>
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
                </Router>
            </div>
        )
}

// export default HomeContainer