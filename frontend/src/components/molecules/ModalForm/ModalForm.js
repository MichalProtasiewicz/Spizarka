import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {Input} from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction, editItem as editItemAction } from 'actions';
import { SelectField } from 'components/atoms/SelectField/SelectField';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 25px;
  }
`;

const StyledButton = styled(Button)`
  align-self: center;
  margin-top: 30px;
`;

const ProductSchema = Yup.object().shape({
  name: Yup.string().required('errors.required'),
  categoryId: Yup.string().required('errors.required'),
  quantity: Yup.number().min(0, 'errors.positiveNum'),
  minQuantity: Yup.number().positive('errors.positiveNum'),
});

const ModalForm = ({ categories, addItem, editedProduct, editItem, handleClose }) => {
  let item = { name: '', categoryId: '', quantity: 0, minQuantity: 0 };
  if (editedProduct) {
    item = editedProduct;
  }
  const [t] = useTranslation('translation');
  return (
    <>
      <StyledHeading >
        {editedProduct ? t('modals.editProduct') : t('modals.newProduct')}
      </StyledHeading>
      <Formik
        enableReinitialize
        initialValues={{ ...item }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          if (editedProduct) {
            editItem(editedProduct.id, values);
          } else {
            addItem(values);
          }
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field
              name="categoryId"
              component={SelectField}
              options={categories}
              errorLabelName="category"
            />
            <StyledInput
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errorLabelName="name"
            >
              {t('product.name')}
            </StyledInput>
            <StyledInput
              type="number"
              name="quantity"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quantity}
              errorLabelName="quantity"
            >
              {t('product.quantity')}
            </StyledInput>
            <StyledInput
              type="number"
              name="minQuantity"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minQuantity}
              errorLabelName="minQuantity"
            >
              {t('product.minQuantity')}
            </StyledInput>
            <StyledButton type="submit">
              {editedProduct ? t('modals.edit') : t('modals.add')}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

ModalForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  editedProduct: PropTypes.object,
  editItem: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
};

ModalForm.defaultProps = {
  editedProduct: null,
};

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
