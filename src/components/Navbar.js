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
                    <Navitem item="About" tolink="/about" activec={this.props.activeitem}></Navitem>
                    <Navitem item="Education" tolink="/education" activec={this.props.activeitem}></Navitem>
                    <Navitem item="Skills" tolink="/skills" activec={this.props.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/contact" activec={this.props.activeitem}></Navitem>
                </ul>
                
            </nav>
            
        )
    }
}

export default Navbar