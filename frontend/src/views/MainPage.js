import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardsList from 'components/organisms/CardsList/CardsList';
import UserPageTemplate from 'templates/UserPageTemplate';

const MainPage = ({ products }) => (
  <UserPageTemplate>
    <CardsList items={products} />
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
