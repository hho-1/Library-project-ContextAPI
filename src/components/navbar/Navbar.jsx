import React, { useContext, useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false); //! hamburger menu için state oluşturduk.
  const { user, setUser } = useContext(AuthContext);

  const handleClose = () => {
    setToggle(false);//! linklere tıklanıldığında stateimizi false a çekerek hamburger menuyu kapatıyoruz.
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Clarus Library</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={toggle}>
        {" "}
        {/* Menu componentine showMenu propsunu gönderdik. Giden değere göre yükseklik artıyor veya azalıyor. Böylelikle menu açılıp kapanıyor.  */}
        <MenuLink to="/" onClick={handleClose}>
          Home
        </MenuLink>
        <MenuLink to="/about" onClick={handleClose}>
          About
        </MenuLink>
        {user ? (
          <MenuLink to="/login" onClick={() => setUser(false)}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/login" onClick={handleClose}>
              Login
            </MenuLink>
            <MenuLink to="/register" onClick={handleClose}>
              Register
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
