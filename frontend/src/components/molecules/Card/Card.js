import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeItem as removeItemAction,
  changeItemQuantity as changeItemQuantityAction,
} from 'actions';
import CloseIcon from '@material-ui/icons/Close';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import withContext from 'hoc/withContext';

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
  color: ${({ theme }) => theme.danger};
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.black};
`;

const StyledEdit = styled(EditIcon)`
  position: absolute;
  left: 190px;
  top: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.black};
`;

const Card = ({ id, name, category, quantity, minQuantity, removeItem, modalContext, changeItemQuantity }) => {
  const [count, setCount] = useState(quantity);

  const IncrementQuantity = () => {
    changeItemQuantity(id, quantity + 1);
    return setCount(count + 1);
  };
  const DecreaseQuantity = () => {
    if (count > 0) {
      changeItemQuantity(id, quantity - 1);
      return setCount(count - 1);
    }
    return null;
  };

  return (
    <StyledWrapper>
      <StyledSpan>{name}</StyledSpan>
      <StyledCloseIcon
        fontSize="large"
        onClick={() => {
          if (window.confirm('Usunąć produkt z listy?')) {
            removeItem(id);
          }
        }}
      />
      <StyledEdit fontSize="large" onClick={modalContext} />
      <QuantityWrapper>
        <MinusIcon
          style={{ fontSize: 40, color: 'hsl(0, 100%, 63%)' }}
          onClick={() => DecreaseQuantity()}
        />
        {count < minQuantity ? (
          <StyledSpan big style={{ color: 'hsl(0, 100%, 63%)' }}>
            {count}
          </StyledSpan>
        ) : (
          <StyledSpan big>{count}</StyledSpan>
        )}
        <PlusIcon
          style={{ fontSize: 40, color: 'hsl(144, 100%, 39%)' }}
          onClick={() => IncrementQuantity()}
        />
      </QuantityWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
  changeItemQuantity: PropTypes.func.isRequired,
  modalContext: PropTypes.func.isRequired,
};

Card.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  changeItemQuantity: (id, quantity) => dispatch(changeItemQuantityAction(id, quantity)),
});

export default withContext(connect(null, mapDispatchToProps)(Card));
