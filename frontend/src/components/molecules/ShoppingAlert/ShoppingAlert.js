import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { editItem as editItemAction } from 'actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

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
  @media (max-width: 435px) {
    margin-left: 40px;
    width: 125px;
  }
`;

const ProductSchema = Yup.object().shape({
  count: Yup.number().min(0, 'errors.positiveNum'),
});

const ShoppingAlert = ({ editedProduct, editItem, handleClose }) => {
  const [t] = useTranslation('translation');
  return (
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
          <StyledHeading>{t('modals.shopping')}</StyledHeading>
          <Input
            type="number"
            name="count"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.count}
            errorLabelName="count"
          >
            {t('product.quantity')}
          </Input>
          <StyledButton type="submit">{t('modals.add')}</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

ShoppingAlert.propTypes = {
  editedProduct: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

ShoppingAlert.defaultProps = {
  editedProduct: null,
};

const mapDispatchToProps = (dispatch) => ({
  editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent)),
});

export default connect(null, mapDispatchToProps)(ShoppingAlert);
