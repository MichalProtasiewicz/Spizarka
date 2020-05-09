import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import Logo from 'components/atoms/Logo/Logo';

const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
  z-index: 1;
`;

const StyledLinksList = styled.ul`
  margin: 0 2vw;
  padding: 0;
  list-style: none;
  display: flex;

  &.active{
    background-color: white;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 2vw;
`;

const Navbar = () => (
  <NavbarWrapper>
    <Logo />
    <StyledLinksList>
      <li>
        <StyledNavLink to={routes.products} activeclass="active">
          Lista Produktów
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={routes.shopping} activeclass="active">
          Lista Zakupów
        </StyledNavLink>
      </li>
    </StyledLinksList>
  </NavbarWrapper>
);

export default Navbar;
