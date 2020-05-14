import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction, editItem as editItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.blue};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 550px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
  align-self: center;
  margin-top: 40px;
`;



const Modal = ({ isVisible, addItem, handleClose, editedProduct, editItem }) => {
  let item = { name: '', category: '', quantity: '', minQuantity: '' };
  if(editedProduct){
    item = editedProduct
  }
  return (
    <StyledWrapper isVisible={isVisible}>
      <Heading big>{editedProduct ? 'Edytuj' : 'Dodaj nowy'} produkt</Heading>
      <Formik
        initialValues={{ ...item }}
        onSubmit={(values) => {
          if (editedProduct) {
            editItem(values);
          } else {
            addItem(values);
          }
          handleClose();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="name"
              placeholder="name"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <StyledInput
              type="text"
              name="category"
              placeholder="category"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            />
            <StyledInput
              type="number"
              name="quantity"
              placeholder="quantity"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quantity}
            />
            <StyledInput
              type="number"
              name="minQuantity"
              placeholder="min quantity"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minQuantity}
            />
            <StyledButton type="submit">{editedProduct ? 'Edytuj' : 'Dodaj'} produkt</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  editedProduct: PropTypes.object,
  editItem: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isVisible: false,
  editedProduct: null,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  editItem: (itemContent) => dispatch(editItemAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(Modal);
