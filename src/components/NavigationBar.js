import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import IconLink from "./IconLink";

export default function NavigationBar() {
  const navItems = ["Home", "About", "Contact"];
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <NavBarContainer>
      {navItems.map((item) => (
        <MenuLink key={item} show={burgerStatus ? 1 : 0} to={`/${item}`}>
          {item}
        </MenuLink>
      ))}
      <IconLink
        link="https://www.nussucommit.com/"
        source="./assets/icons/CommIT Logo Transparent.png"
        alternateText="CommIT Logo"
        hideWhenMinimize={true}
      />
      <RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus ? 1 : 0}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {navItems.map((item) => (
          <li key={item}>
            <BurgerMenuLink to={`/${item}`}>{item}</BurgerMenuLink>
          </li>
        ))}
      </BurgerNav>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;

const MenuLink = styled(NavLink)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;
  margin: 0 6vw;
  font-size: 2vh;
  flex-wrap: nowrap;

  &:hover,
  &:after,
  &.active {
    transition: 0.3s;
    color: #09f3fd;
  }

  @media (max-width: 768px) {
    display: none; // If screen small, do not display the menu
  }
`;

const RightMenu = styled.div`
  display: none;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

const CustomMenu = styled(MenuIcon)`
  color: white;
  cursor: pointer;
  margin: 0 2vw;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const BurgerMenuLink = styled(NavLink)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;
  padding: 0 30px;
  flex-wrap: nowrap;
  font-size: 2vh;

  &:hover,
  &:after,
  &.active {
    transition: 0.3s;
    color: #09f3fd;
  }

  @media (max-width: 768px) {
    color: black// If screen small, do not display the menu;
  } ;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
