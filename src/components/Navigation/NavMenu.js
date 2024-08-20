import React from 'react';
import { NavLink } from "react-router-dom";

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false, showMenu: ''};
        this.checkboxHandler = this.checkboxHandler.bind(this);
      }

    checkboxHandler = (e) => {
        if (e.target.checked) {
            this.setState({showMenu: 'showMenu'})
        }
        else {
            this.setState({showMenu: ''})
        }
        this.setState({
            checked: e.target.checked
        });
      }

    render(props) {
        return (
            <div id="navigationmenu">
                <ul id="menu" className={this.state.showMenu}>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/"><h2>About Me</h2></NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/portfolio"><h2>Portfolio</h2></NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/contact"><h2>Contact</h2></NavLink>
                </ul>
                <nav role='navigation'>
                    <div id="menuToggle">
                        <input type="checkbox" checked={ this.state.checked } onChange={ this.checkboxHandler }/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavMenu;