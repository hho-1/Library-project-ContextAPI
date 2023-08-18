import React, { useContext, useState } from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { menuIcon } from '../../helper/iconData'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const {user, setUser} = useContext(AuthContext)

  return (
    <Nav justify = "space-between" wrap="wrap">
      <Logo to="/">Clarus library</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>{menuIcon}</HamburgerIcon>
      <Menu showMenu = {toggle}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {
          user ? (
            <MenuLink to="/login" onClick={()=> setUser(false)}>Logout</MenuLink>
          )
          :
          (
            <>
              <MenuLink to="/login">Login</MenuLink>
              <MenuLink to="/register">Register</MenuLink>
            </>
          )
        }
        
        
      </Menu>
    </Nav>
  )
}

export default Navbar