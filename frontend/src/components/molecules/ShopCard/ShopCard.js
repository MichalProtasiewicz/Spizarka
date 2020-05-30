import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 80vw;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.raisinBlack};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: right;
  position: relative;
  padding: 15px;
  margin: 30px auto 30px auto;
`;

const NameSpan = styled.span`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const CategorySpan = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const QuantityWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.danger};

  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.success};
    `}
`;


const ShopCard = ({ id, name, category, quantity, minQuantity }) => {
  return (
    <StyledWrapper>
      <NameSpan>{name}</NameSpan>
      <CategorySpan>{category}</CategorySpan>
      <QuantityWrapper>
        <StyledSpan>{quantity}</StyledSpan>/<StyledSpan green>{minQuantity}</StyledSpan>
      </QuantityWrapper>
    </StyledWrapper>
  );
};

ShopCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
};

ShopCard.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

export default ShopCard;
