import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div className="condiv">
                <div className="nameBox">
                    <span className="marinaText">Marina</span>
                    <br />
                    <span className="amp">&</span>
                    <br />
                    <span className="caseyText">Casey</span>
                </div>
                <div className="nameBox">
                    <span className="titleDate">September 24, 2022</span>
                </div>
                <div className="nameBox">
                    <span className="hashtag">#marinapatchopoulos<br/>#takingsuggestions</span>
                </div>
            </div>
        )
    }
}

export default Home