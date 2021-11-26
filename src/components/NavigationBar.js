import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavigationBar() {
  return (
    <Container>
      <Menu>
        <MenuLink to="/Home">Home</MenuLink>
        <MenuLink to="/About">About</MenuLink>
        <MenuLink to="/Schedule">Schedule</MenuLink>
        <MenuLink to="/Competition">Competition</MenuLink>
        <MenuLink to="/Contacts">Contacts</MenuLink>
      </Menu>
    </Container>
  );
}

export default NavigationBar;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none; // If screen small, do not display the menu
  }
`;

const MenuLink = styled(NavLink)`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;
  padding: 0 50px;
  flex-wrap: nowrap;

  &:hover,
  &:after,
  &.active {
    transition: 0.3s;
    color: #ffa500;
  }
`;
