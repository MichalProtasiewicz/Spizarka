import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';

const StyledWrapper = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 1);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75% 25%;
  position: relative;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid;
  padding: 10px;
  border-radius: 10px;
`;

const StyledSpan = styled.span`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  align-self: center;
  justify-self: center;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  left: 190px;
  top: -10px;
  border-radius: 6px;
  color: red;
  background-color: white;
  border: 2px solid black;
`;

const Card = ({ name, quantity, minQuantity }) => {
  const [count, setCount] = useState(quantity);

  const IncrementQuantity = () => {
    return setCount(count + 1);
  };
  const DecreaseQuantity = () => {
    if (count > 0) return setCount(count - 1);

    return null;
  };

  return (
    <StyledWrapper>
      <StyledSpan>{name}</StyledSpan>
      <StyledCloseIcon fontSize="large" />
      <QuantityWrapper>
        <MinusIcon style={{ fontSize: 40, color: 'red' }} onClick={() => DecreaseQuantity()} />
        {count < minQuantity ? (
          <StyledSpan big style={{ color: 'red' }}>
            {count}
          </StyledSpan>
        ) : (
          <StyledSpan big>{count}</StyledSpan>
        )}
        <PlusIcon style={{ fontSize: 40, color: 'green' }} onClick={() => IncrementQuantity()} />
      </QuantityWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
};

Card.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

export default Card;
