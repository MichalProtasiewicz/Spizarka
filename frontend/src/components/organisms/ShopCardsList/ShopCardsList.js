import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ShopCard from 'components/molecules/ShopCard/ShopCard';

const ShopListWrapper = styled.div`
  margin-bottom: 30px;
`;

const ShopCardsList = ({ items }) => {
  const shopItems = items.filter((item) => item.quantity < item.minQuantity)
  return (
    <ShopListWrapper>
      {shopItems.map((item) => (
        <ShopCard key={item.id} {...item} />
      ))}
    </ShopListWrapper>
  );
};

ShopCardsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ShopCardsList;
