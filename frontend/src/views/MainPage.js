import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardsList from 'components/organisms/CardsList/CardsList';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const MainPage = ({ products }) => (
  <UserPageTemplate>
    <>
    <StyledHeading big>Lista produktów</StyledHeading>
    <CardsList items={products} />
    </>
  </UserPageTemplate>
);

const mapStateToProps = ({ products }) => ({ products });

MainPage.propTypes = {
  products: PropTypes.array,
};

MainPage.defaultProps = {
  products: [],
};

export default connect(mapStateToProps)(MainPage);
