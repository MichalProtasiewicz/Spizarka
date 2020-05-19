import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import ShopCardsList from 'components/organisms/ShopCardsList/ShopCardsList';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const ShopListPage = ({ products }) => (
  <UserPageTemplate>
    <>
    <StyledHeading big>Lista zakupów</StyledHeading>
    <ShopCardsList items={products} />
    </>
  </UserPageTemplate>
);

const mapStateToProps = ({ products }) => ({ products });

ShopListPage.propTypes = {
  products: PropTypes.array,
};

ShopListPage.defaultProps = {
  products: [],
};

export default connect(mapStateToProps)(ShopListPage);
