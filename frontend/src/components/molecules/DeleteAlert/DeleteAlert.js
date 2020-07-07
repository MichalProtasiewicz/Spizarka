import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
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

const DeclineButton = styled(Button)`
  grid-column: 1;
  grid-row: 2;
  width: 150px;
  margin-left: 5%;
  @media (max-width: 450px) {
    width: 125px;
    margin-left: 0;
  }
  @media (max-width: 370px) {
    width: 100px;
  }
`;

const AcceptButton = styled(Button)`
  grid-column: 2;
  grid-row: 2;
  width: 150px;
  margin-left: 10%;
  @media (max-width: 450px) {
    width: 125px;
    margin-left: 0;
  }
  @media (max-width: 370px) {
    width: 100px;
  }
`;

const DeleteAlert = ({ handleClose, editedProduct, removeItem }) => {
  const [t] = useTranslation('translation');
  return (
    <Wrapper>
      <StyledHeading>{t('modals.deleteProduct')}</StyledHeading>
      <DeclineButton
        danger
        addEventListener
        onClick={() => {
          handleClose();
        }}
      >
        {t('modals.no')}
      </DeclineButton>
      <AcceptButton
        success
        addEventListener
        onClick={() => {
          removeItem(editedProduct.id);
          handleClose();
        }}
      >
        {t('modals.yes')}
      </AcceptButton>
    </Wrapper>
  );
};

DeleteAlert.propTypes = {
  editedProduct: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

DeleteAlert.defaultProps = {
  editedProduct: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(DeleteAlert);
