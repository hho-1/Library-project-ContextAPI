
import styled from "styled-components";
import Flex from "../../styles/Flex.styled";
import { NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
    background-color: ${({theme}) => theme.colors.navbarBgColor};
    padding: 1rem 2rem;
`

export const Logo = styled(NavLink)`
    font-weight: 800;
    font-size: 2rem;
    color: ${({theme}) => theme.colors.logoColor};
    transition: color .5s;
    :hover{
        color: ${({theme}) => theme.colors.linkHoverColor};
    }
`

export const HamburgerIcon = styled.div`
    display: none;   
    cursor: pointer;   
    @media (max-width: ${({theme}) => theme.screens.lg}){
        display: block;
    }                               
`

export const Menu = styled(Flex)`
    @media (max-width: ${({theme}) => theme.screens.lg}){
        flex-direction: column;
        width: 100%;
        transition: all .5s;
        max-height: ${({showMenu}) => showMenu ? "330px" : "0px"};
        overflow: hidden;
    }
`

export const MenuLink = styled(NavLink)`
    padding: 1rem 2rem;
    color: ${({theme}) => theme.colors.linkColor};
    :hover{
        color: ${({theme}) => theme.colors.linkHoverColor};
    }
    &.active{
        color: ${({theme}) => theme.colors.activeLinkColor};
    }
`
