import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
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

const ShopListModal = ({ name }) => (
  <StyledWrapper>
    <Formik
      enableReinitialize
      initialValues={{ count: 0 }}
      onSubmit={(values) => {
        // update product quantity function
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledHeading>{name} Ile sztuk produktu zostało kupione? </StyledHeading>
          <Input
            type="number"
            name="count"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.count}
          >
            Ilość
          </Input>
          <StyledButton type="submit">Dodaj</StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

ShopListModal.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ShopListModal;
