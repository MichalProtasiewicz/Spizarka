import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeItem as removeItemAction,
  editItem as editItemAction,
} from 'actions';
import CloseIcon from '@material-ui/icons/Close';
import MinusIcon from '@material-ui/icons/Remove';
import PlusIcon from '@material-ui/icons/Add';
import EditIcon from 'assets/icons/edit.svg';
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

const StyledEditButton = styled.button`
  position: absolute;
  left: 190px;
  top: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.black};

  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-image: url(${EditIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75% 75%;
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
  const editedItem= {id, name, categoryId, quantity, minQuantity}
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
      <StyledCloseIcon
        fontSize="large"
        onClick={() => {
          if (window.confirm('Usunąć produkt z listy?')) {
            removeItem(id);
          }
        }}
      />
      <StyledEditButton addEventListener onClick={modalContext.editItem} value={id} />
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
