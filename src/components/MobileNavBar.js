import React, { useState } from "react";
import Navitem from "./Navitem";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const MobileNavBar = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

    return (
    <nav className="MobileNavBar">
        <button onClick={handleToggle}>{navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <Navitem item="Home" tolink="/" activec={props.activeitem}></Navitem>
                    <Navitem item="Wedding" tolink="/wedding" activec={props.activeitem}></Navitem>
                    <Navitem item="Accommodations" tolink="/Accommodations" activec={props.activeitem}></Navitem>
                    <Navitem item="Registry" tolink="/registry" activec={props.activeitem}></Navitem>
                    <Navitem item="RSVP" tolink="/rsvp" activec={props.activeitem}></Navitem>
                </ul>
    </nav>
    )
}

export default MobileNavBar;
