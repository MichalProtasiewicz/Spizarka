import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction, editItem as editItemAction } from 'actions';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import EditIcon from 'assets/icons/edit.svg';
import CrossIcon from 'assets/icons/cross.svg';
import withContext from 'hoc/withContext';
import CardButton from 'components/atoms/CardButton/CardButton';

const StyledWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 4px solid ${({ theme }) => theme.blue};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
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
  border-top: 3px solid ${({ theme }) => theme.blue};
  padding: 10px;
  border-radius: 10px;
`;

const StyledSpan = styled.span`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  align-self: center;
  justify-self: center;
`;

const Card = ({
  id,
  name,
  categoryId,
  quantity,
  minQuantity,
  removeItem,
  modalContext,
  editItem,
}) => {
  const editedItem = { id, name, categoryId, quantity, minQuantity };
  const IncrementQuantity = () => {
    editedItem.quantity++;
    editItem(id, editedItem);
    return editedItem;
  };
  const DecreaseQuantity = () => {
    if (quantity > 0) {
      editedItem.quantity--;
      editItem(id, editedItem);
      return editedItem;
    }
    return editedItem;
  };

  return (
    <StyledWrapper>
      <StyledSpan>{name}</StyledSpan>
      <CardButton
        style={{ top: '-15px', left: '180px' }}
        red
        icon={CrossIcon}
        addEventListener
        onClick={() => {
          if (window.confirm('Usunąć produkt z listy?')) {
            removeItem(id);
          }
        }}
      />
      <CardButton
        style={{ top: '25px', left: '180px' }}
        green
        icon={EditIcon}
        addEventListener
        onClick={modalContext.editItem}
        value={id}
      />
      <QuantityWrapper>
        <MinusIcon
          style={{ fontSize: 40, color: 'hsl(0, 100%, 63%)' }}
          onClick={() => DecreaseQuantity()}
        />
        {quantity < minQuantity ? (
          <StyledSpan big style={{ color: 'hsl(0, 100%, 63%)' }}>
            {quantity}
          </StyledSpan>
        ) : (
          <StyledSpan big>{quantity}</StyledSpan>
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  minQuantity: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  modalContext: PropTypes.object.isRequired,
};

Card.defaultProps = {
  quantity: 0,
  minQuantity: 0,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  editItem: (id, content) => dispatch(editItemAction(id, content)),
});

export default withContext(connect(null, mapDispatchToProps)(Card));
