import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import ShopCardsList from 'components/organisms/ShopCardsList/ShopCardsList';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const ShopListPage = ({ products }) => {
  const [t] = useTranslation('translation');
  return (
    <UserPageTemplate>
      <>
        <StyledHeading big>{t('navbar.shoppingList')}</StyledHeading>
        <ShopCardsList items={products} />
      </>
    </UserPageTemplate>
  );
};

ShopListPage.propTypes = {
  products: PropTypes.array,
};

ShopListPage.defaultProps = {
  products: [],
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(ShopListPage);
