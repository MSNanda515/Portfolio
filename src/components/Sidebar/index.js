import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
    SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from 
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
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
