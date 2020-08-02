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
  margin-top: 10px;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const StyledLogo = styled.img`
  width: 150px;
  height: auto;
  @media (max-width: 450px) {
    margin-left: 25%;
  }
`;

const StyledHeading = styled(Heading)`
  margin-top: 60px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-family: cursive;
  @media (max-width: 450px) {
    display:none;
  }
`;

const StyledAuthCard = styled.div`
  width: 550px;
  height: 600px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const LangWrapper = styled.div`
  position: fixed;
  right: 0px;
  top: 0;
  width: 66px;
  height: 33px;
  background-color: ${({ theme }) => theme.blue};
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
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
