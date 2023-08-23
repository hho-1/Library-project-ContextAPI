import React, { useContext } from "react";
import { FooterBtn, FooterContainer } from "./Footer.style";
import { darkIcon, lightIcon } from "../../helper/iconData";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { myTheme, setMyTheme } = useContext(ThemeContext);
  const handleClick = () => {
    // if(myTheme === "light") {
    //   setMyTheme("dark")
    // }else{
    //   setMyTheme("light")
    // }
    setMyTheme(prev => (prev === "light" ? "dark" : "light"));
    //!statein anlık durumuna göre güncelleme yapacak. kullanıcı tıkladıkça toggle mantığı kurmuş olduk
    //* setter metodu içerisine bir callback function kabul edebiliyor. Bu callback function parametre alan bir function ve bu parametre statein anlık değerini temsil ediyor. Bu parametreye göre ekstra işlemler veya kontroller yapabilirsiniz.
  };
  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>
        {myTheme === "light" ? lightIcon : darkIcon}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
