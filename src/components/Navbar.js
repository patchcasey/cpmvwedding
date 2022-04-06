import React from 'react';
import Navitem from './Navitem'

const Navbar = (props) => {

    const doNothing =() => {};

        return (
            <nav className='NavBar'>
                <ul>
                    <Navitem item="Home" tolink="/" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                    <Navitem item="Wedding" tolink="/wedding" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                    <Navitem item="Wedding Party" tolink="/party" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                    <Navitem item="Schedule" tolink="/schedule" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                    <Navitem item="Accommodations" tolink="/Accommodations" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                    <Navitem item="Registry" tolink="/registry" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                    <Navitem item="RSVP" tolink="/rsvp" activec={props.activeitem} closeNavBar={doNothing}></Navitem>
                </ul>
                
            </nav>
            
        )
}

export default Navbar