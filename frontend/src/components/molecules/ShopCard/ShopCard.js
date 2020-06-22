import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CrossIcon from 'assets/icons/cross.svg';
import CardButton from 'components/atoms/CardButton/CardButton';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  width: 80vw;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.blue};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
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

const StyledCardButton = styled(CardButton)`
  top: -15px;
  left: 80vw;
  margin-left: -20px;
`;

const ShopCard = ({ id, name, categoryId, quantity, minQuantity, categories, modalContext }) => {
  const categoryName = categories.find((x) => x.id === categoryId).name;
  return (
    <StyledWrapper>
      <StyledCardButton
        icon={CrossIcon}
        addEventListener
        onClick={modalContext.editShopItem}
        value={id}
      />
      <CategorySpan>{categoryName}</CategorySpan>
      <NameSpan>{name}</NameSpan>
      <QuantityWrapper>
        <StyledSpan>{quantity}</StyledSpan>/<StyledSpan green>{minQuantity}</StyledSpan>
      </QuantityWrapper>
    </StyledWrapper>
  );
};

ShopCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
  categories: PropTypes.array.isRequired,
  modalContext: PropTypes.object.isRequired,
};

ShopCard.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

const mapStateToProps = ({ categories }) => ({ categories });

export default withContext(connect(mapStateToProps)(ShopCard));
