import React, {useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardsList from 'components/organisms/CardsList/CardsList';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import { fetchItems as fetchItemsAction } from 'actions';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const MainPage = ({ products, fetchProducts }) => {
  useEffect(()=> {
    fetchProducts();
  }, [])
  return (
    <UserPageTemplate>
      <>
        <StyledHeading big>Lista produktów</StyledHeading>
        <CardsList items={products} />
      </>
    </UserPageTemplate>
  );
};

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchItemsAction()),
});

MainPage.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
  products: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
