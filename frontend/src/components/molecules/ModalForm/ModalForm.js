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

const ModalForm = ({ addItem, editedProduct, editItem, handleClose }) => {
  let item = { name: '', category: '', quantity: '', minQuantity: '' };
  if (editedProduct) {
    item = editedProduct;
  }
  return (
    <StyledWrapper>
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

ModalForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  editedProduct: PropTypes.object,
  editItem: PropTypes.func.isRequired,
};

ModalForm.defaultProps = {
  editedProduct: null,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  editItem: (itemContent) => dispatch(editItemAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(ModalForm);
