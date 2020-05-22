import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import logoImg from 'assets/logo.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px 40px 20px;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: auto;
`;

const StyledHeading = styled(Heading)`
  margin-top: 60px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-family: cursive;
`;

const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <LogoWrapper>
      <StyledLogo src={logoImg} alt="" />
      <StyledHeading big>Spizarka</StyledHeading>
    </LogoWrapper>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

export default AuthTemplate;
