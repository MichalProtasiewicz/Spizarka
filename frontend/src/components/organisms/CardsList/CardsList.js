import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 50px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

const CardsList = ({ items }) => (
  <StyledGrid>
    {items.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </StyledGrid>
);

CardsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CardsList;
