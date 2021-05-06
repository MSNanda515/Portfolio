import React, { Component} from 'react';
// import { Navbar, NavItem } from 'react-bootstrap';
import { MenuItems } from "./MenuItems.js"
import './Navbar.css'
import {Button} from '../Button.js'
 
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">MeharSingh <i class="fas fa-rocket"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li><a className="nav-links">Demo</a></li> */}
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign UP</Button> */}
            </nav>
        );
    }
}

export default Navbar