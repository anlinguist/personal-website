import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
    <div id="navigationbar" className={props.headerHeight}>
        <div id="navitems">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/"><h2>About Me</h2></NavLink>
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/portfolio"><h2>Portfolio</h2></NavLink>
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/contact"><h2>Contact</h2></NavLink>
        </div>
    </div>
    );
}

export default NavBar;