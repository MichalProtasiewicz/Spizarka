import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import Logo from 'components/atoms/Logo/Logo';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import BurgerIcon from 'assets/icons/burger.svg';

const NavbarWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 25px 0;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.blue};
  z-index: 1;
`;

const StyledLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 2vw;
  padding: 0;
  list-style: none;
  @media (max-width: 800px) {
    z-index: 2;
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    height: 100vh;
    width: 400px;
    margin: 0;
    padding: 150px 50px;
    background-color: ${({ theme }) => theme.white};
    border-left: 10px solid ${({ theme }) => theme.blue};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    transform: translate(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform 0.25s ease-in-out;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 12px;
  margin: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.l};
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

  @media (max-width: 800px) {
    color: ${({ theme }) => theme.black};
    border: none;
  }
  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.grey100};
  }
  &:active {
    color: ${({ theme }) => theme.grey200};
  }
  @media (max-width: 800px) {
    color: ${({ theme }) => theme.black};
    margin: 20px;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  z-index: 9999;
  display: none;
  margin-right: 20px;
  background-color: transparent;
  font-size: 40;
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
  @media (max-width: 800px) {
    display: fixed;
  }
`;

const Navbar = ({ logout }) => {
  const [t] = useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);

   const toggleHamburgerMenu = () => {
     return setIsOpen(!isOpen);
   };

  return (
    <NavbarWrapper>
      <Logo />
      <StyledButtonIcon
        icon={BurgerIcon}
        style={{  }}
        onClick={toggleHamburgerMenu}
      />
      <StyledLinksList isOpen={isOpen}>
        <li>
          <StyledNavLink to={routes.products} activeclass="active">
            {t('navbar.productsList')}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.shopping} activeclass="active">
            {t('navbar.shoppingList')}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.settings} activeclass="active">
            {t('navbar.settings')}
          </StyledNavLink>
        </li>
        <li>
          <StyledButton onClick={logout}>{t('navbar.logout')}</StyledButton>
        </li>
      </StyledLinksList>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(Navbar);
