import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid black;
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
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin-bottom: 30px;
`;

const NewItemBar = ({ isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible}>
    <Heading big>Add new product</Heading>
    <Formik
      initialValues={{ name: '', category: '', quantity: '', minQuantity: '' }}
      onSubmit={(values) => {
        addItem(values);
        handleClose();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="name"
            placeholder="name"
            autocomplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledInput
            type="text"
            name="category"
            placeholder="category"
            autocomplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
          />
          <StyledInput
            type="number"
            name="quantity"
            placeholder="quantity"
            autocomplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
          />
          <StyledInput
            type="number"
            name="minQuantity"
            placeholder="min quantity"
            autocomplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.minQuantity}
          />
          <Button type="submit">Add product</Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(NewItemBar);
