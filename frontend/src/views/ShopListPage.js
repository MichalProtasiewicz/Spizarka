import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const ShopListPage = () => (
  <UserPageTemplate>
    <StyledHeading big>Lista zakupów</StyledHeading>
  </UserPageTemplate>
);
export default ShopListPage;

