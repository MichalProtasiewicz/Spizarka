import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import Logo from 'components/atoms/Logo/Logo';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';

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
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.grey100};
  }
  &:active {
    border-color: ${({ theme }) => theme.grey200};
    color: ${({ theme }) => theme.grey200};
  }
`;

const StyledButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  outline:none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.grey100};
  }
  &:active {
    color: ${({ theme }) => theme.grey200};
  }
`;

const Navbar = ({ logout }) => (
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
      <li>
        <StyledNavLink to={routes.settings} activeclass="active">
          Ustawienia
        </StyledNavLink>
      </li>
      <li>
        <StyledButton onClick={logout}>Wyloguj</StyledButton>
      </li>
    </StyledLinksList>
  </NavbarWrapper>
);

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(Navbar);
