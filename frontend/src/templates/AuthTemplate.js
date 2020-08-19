import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import logoImg from 'assets/logo.svg';
import LanguageButton from 'components/atoms/LanguageButton/LanguageButton';
import PlFlag from 'assets/icons/plFlag.svg';
import UkFlag from 'assets/icons/ukFlag.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.blue};
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 10px 15px;
  width: 400px;
  @media (max-width: 450px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
  @media (max-width: 350px) {
    width: 90%;
  }
`;

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 450px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledHeading = styled(Heading)`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-family: cursive;
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledAuthCard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const LangWrapper = styled.div`
  position: fixed;
  right: 0px;
  top: 0;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  width: 66px;
  height: 33px;
  background-color: ${({ theme }) => theme.blue};
`;

const StyledLanguageButton = styled(LanguageButton)`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.blue};
`;

const AuthTemplate = ({ children }) => {
  const [t, i18n] = useTranslation('translation');
  return (
    <StyledWrapper>
      <Suspense fallback="loading">
        <LangWrapper>
          <StyledLanguageButton
            icon={PlFlag}
            addEventListener
            onClick={() => i18n.changeLanguage('pl')}
          />
          <StyledLanguageButton
            icon={UkFlag}
            addEventListener
            onClick={() => i18n.changeLanguage('en')}
          />
        </LangWrapper>
      </Suspense>
      <LogoWrapper>
        <StyledLogo src={logoImg} alt="logo" />
        <StyledHeading>Spizarka</StyledHeading>
      </LogoWrapper>
      <StyledAuthCard>{children}</StyledAuthCard>
    </StyledWrapper>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AuthTemplate;
