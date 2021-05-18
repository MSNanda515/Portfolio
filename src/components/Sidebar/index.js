import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
    SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, 
    SidebarButtonLink} from 
    './SidebarElements'

import {MenuItems} from "../Navbar2/MenuItems"
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {MenuItems.map(item => (
                        <SidebarLink to={item.id} onClick={toggle}>
                            {item.title}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
                    <SidebarButtonLink to="footer" onClick={toggle}>Get In Touch</SidebarButtonLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
