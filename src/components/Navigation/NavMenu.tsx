import { useState } from 'react';
import { NavLink } from "react-router-dom";

function NavMenu() {
    const [checked, setChecked] = useState(false);
    const [showMenu, setShowMenu] = useState('');

    const checkboxHandler = (e: any) => {
        if (e.target.checked) {
            setShowMenu('showMenu')
        }
        else {
            setShowMenu('')
        }
        setChecked(e.target.checked);
    }

    return (
        <div id="navigationmenu">
            <ul id="menu" className={showMenu}>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/"><h2>About Me</h2></NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/portfolio"><h2>Portfolio</h2></NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/blog"><h2>Blog</h2></NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/contact"><h2>Contact</h2></NavLink>
            </ul>
            <nav role='navigation'>
                <div id="menuToggle">
                    <input type="checkbox" checked={checked} onChange={checkboxHandler} />
                    <span></span>
                    <span></span>
                    <span></span>
                    <div></div>
                </div>
            </nav>
        </div>
    );
}

export default NavMenu;