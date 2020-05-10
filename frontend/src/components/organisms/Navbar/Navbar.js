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
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.blue};
  z-index: 1;
`;

const StyledLinksList = styled.ul`
  margin: 0 2vw;
  padding: 0;
  list-style: none;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 12px;
  margin: 15px;
  border-left: 1px ${({ theme }) => theme.raisinBlack} solid;
  border-right: 1px ${({ theme }) => theme.raisinBlack} solid;
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
