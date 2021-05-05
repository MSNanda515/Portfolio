import React, { Component} from 'react';
// import { Navbar, NavItem } from 'react-bootstrap';
import { MenuItems } from "./MenuItems.js"
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-logo">

                </div>
                <ul>
                    {MenuItems.map((item)=>{
                        return(
                            <li key={item.title}>
                                <a classname={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar