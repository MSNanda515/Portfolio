import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
    NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { MenuItems } from "./MenuItems"

const Navbar2 = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Mehar Singh
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="\{MenuItems[0].id}" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} activeClass="active"
                            >{MenuItems[0].title}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="\{MenuItems[1].id}" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} activeClass="active"
                            >{MenuItems[1].title}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="\{MenuItems[2].id}" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} activeClass="active"
                            >{MenuItems[2].title}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="\{MenuItems[3].id}" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} activeClass="active"
                            >{MenuItems[3].title}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="{MenuItems[4].id}" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} activeClass="active"
                            >{MenuItems[4].title}</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}
                            >Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar2;