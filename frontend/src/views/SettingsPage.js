import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const ShopListPage = () => {
  const [t, i18n] = useTranslation('translation');
  return (
    <UserPageTemplate>
      <Suspense fallback="loading">
        <StyledHeading big>{t('navbar.settings')}</StyledHeading>
        <Paragraph>{t('settings.languages')}</Paragraph>
        <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </Suspense>
    </UserPageTemplate>
  );
};

export default ShopListPage;
