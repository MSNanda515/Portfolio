import styled from 'styled-components'
import { Link as LinkR }  from 'react-router-dom'
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-cotnent: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: all 0.8s ease;
    }
`;

export const NavbarContainer = styled.div`
    // display: flex;
    // justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 20px;
    // max-width: 1800px;

    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    align-items: center;
    color: #fff;
    justify-self: start;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        color: #fff;
    }
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width:1000px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff; 
    }
`;

export const NavMenu = styled.ul `
    // display: flex;
    // align-items: center;
    // list-style: none;
    // text-align: center;
    // margin-right: -22px;
    
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    font-size: 1.3rem;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavItem = styled.li `
    height: 80px;
`;

export const NavLinks = styled(LinkS)  `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        text-decoration: none;
        color: #01bf71;
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR) `
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        text-decoration: none;
    }
`;

