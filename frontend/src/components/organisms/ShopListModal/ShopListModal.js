import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import CardButton from 'components/atoms/CardButton/CardButton';
import CrossIcon from 'assets/icons/cross.svg';

import { editItem as editItemAction } from 'actions';

const StyledWrapper = styled.div`
  z-index: 9999;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isVisible }) => (isVisible ? 'absolute' : 'none')};
  padding: 10px 30px 10px 30px;
  border: 5px solid ${({ theme }) => theme.blue};
  border-radius: 15px;
  height: 200px;
  width: 550px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
`;

const StyledForm = styled(Form)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5px;
`;

const StyledHeading = styled(Heading)`
  grid-column: 1/3;
  grid-row: 1;
`;

const StyledButton = styled(Button)`
  grid-column: 2;
  grid-row: 2;
  width: 150px;
  margin-left: 60px;
`;

const StyledCardButton = styled(CardButton)`
  position: absolute;
  top: -14px;
  left: 524px;
`;

const ProductSchema = Yup.object().shape({
  count: Yup.number().min(0, 'Positive number required'),
});

const ShopListModal = ({ isVisible, editedProduct, handleClose, editItem }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledCardButton
        icon={CrossIcon}
        addEventListener
        onClick={() => {
          handleClose();
        }}
      />
      <Formik
        enableReinitialize
        initialValues={{ count: 0 }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          editedProduct.quantity += values.count;
          editItem(editedProduct.id, editedProduct);
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledHeading>Ile sztuk produktu kupiono? </StyledHeading>
            <Input
              type="number"
              name="count"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.count}
              errorLabelName="count"
            >
              Ilość
            </Input>
            <StyledButton type="submit">Dodaj</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

ShopListModal.propTypes = {
  isVisible: PropTypes.bool,
  editedProduct: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

ShopListModal.defaultProps = {
  isVisible: false,
  editedProduct: null,
};

const mapDispatchToProps = (dispatch) => ({
  editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent)),
});

export default connect(null, mapDispatchToProps)(ShopListModal);
