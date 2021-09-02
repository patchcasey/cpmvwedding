import React, { Component } from 'react';
import Navitem from './Navitem'

class Navbar extends Component {

    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         'NavItemActive':''
    //     }
    // }

    

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.props.activeitem}></Navitem>
                    <Navitem item="Wedding" tolink="/wedding" activec={this.props.activeitem}></Navitem>
                    <Navitem item="Accommodations" tolink="/Accommodations" activec={this.props.activeitem}></Navitem>
                    <Navitem item="Registry" tolink="/registry" activec={this.props.activeitem}></Navitem>
                    <Navitem item="RSVP" tolink="/rsvp" activec={this.props.activeitem}></Navitem>
                </ul>
                
            </nav>
            
        )
    }
}

export default Navbar