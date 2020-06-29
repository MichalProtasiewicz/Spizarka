import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LanguageButton from 'components/atoms/LanguageButton/LanguageButton';
import PlFlag from 'assets/icons/plFlag.svg';
import UkFlag from 'assets/icons/ukFlag.svg';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const LangWrapper = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: 0.75fr 0.5fr 0.5fr;
`;

const ShopListPage = () => {
  const [t, i18n] = useTranslation('translation');
  return (
    <UserPageTemplate>
      <Suspense fallback="loading">
        <StyledHeading big>{t('navbar.settings')}</StyledHeading>
        <LangWrapper>
          <Paragraph>{t('settings.languages')}:</Paragraph>
          <LanguageButton
            icon={PlFlag}
            addEventListener
            onClick={() => i18n.changeLanguage('pl')}
          />
          <LanguageButton
            icon={UkFlag}
            addEventListener
            onClick={() => i18n.changeLanguage('en')}
          />
        </LangWrapper>
      </Suspense>
    </UserPageTemplate>
  );
};

export default ShopListPage;
