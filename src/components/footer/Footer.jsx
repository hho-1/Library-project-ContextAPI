import React from 'react'
import { FooterBtn, FooterContainer } from './Footer.style'
import { darkIcon, lightIcon } from '../../helper/iconData'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Footer = () => {
  const {myTheme, setMyTheme} = useContext(ThemeContext)
  const handleClick = () => {
    setMyTheme((prev) => prev === "light" ? "dark" : "light")
  }
  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>{myTheme === "light" ? lightIcon : darkIcon}</FooterBtn>
    </FooterContainer>
  )
}

export default Footer