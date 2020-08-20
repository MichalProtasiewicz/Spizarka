import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import logoIcon from 'assets/logo.svg';

const StyledLogoWrapper = styled.div`
  display: flex;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  border: none;
`;

const StyledLogoName = styled.h1`
  margin: 18px 0 0 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.white};

  @media (min-width: 800px) {
    display: none;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;

const Logo = () => (
  <StyledLogoWrapper>
    <StyledLogoLink to={routes.home} />
    <StyledLogoName>Spizarka</StyledLogoName>
  </StyledLogoWrapper>
);

export default Logo;
