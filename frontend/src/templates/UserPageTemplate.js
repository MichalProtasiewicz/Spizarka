import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'components/organisms/Modal/Modal';
import ModalForm from 'components/molecules/ModalForm/ModalForm';
import ModalContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from '@material-ui/icons/Add';
import Navbar from 'components/organisms/Navbar/Navbar';
import AlertModal from 'components/organisms/AlertModal/AlertModal';
import ShoppingAlert from 'components/molecules/ShoppingAlert/ShoppingAlert';
import DeleteAlert from 'components/molecules/DeleteAlert/DeleteAlert';
import { fetchItems as fetchItemsAction, fetchCategories as fetchCategoriesAction } from 'actions';

const StyledWrapper = styled.div`
  position: relative;
  padding: 100px 5vw 0 5vw;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 10000;
`;

const UserPageTemplate = ({ children, products, fetchProducts, fetchCategories }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);
  const [isAlertModalBarVisible, setIsAlertModalBarVisible] = useState(false);
  const [itemEdited, setItemEdited] = useState(null);
  const [isDeleteAlert, setIsDeleteAlert] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const choseEditedItem = (e) => {
    const id = e.target.value;
    const itemEditedTmp = products.filter((item) => {
      return item.id == id;
    });
    setItemEdited(itemEditedTmp[0]);
  };

  const toggleNewItemBar = () => {
    return setIsNewItemBarVisible(!isNewItemBarVisible);
  };
  const toggleAlertModalBar = () => {
    return setIsAlertModalBarVisible(!isAlertModalBarVisible);
  };
  const addItem = () => {
    setItemEdited(null);
    toggleNewItemBar();
  };
  const editItem = (e) => {
    choseEditedItem(e);
    toggleNewItemBar();
  };
  const editShopItem = (e) => {
    choseEditedItem(e);
    setIsDeleteAlert(false);
    toggleAlertModalBar();
  };
  const deleteItemAlert = (e) => {
    choseEditedItem(e);
    setIsDeleteAlert(true);
    toggleAlertModalBar();
  };

  const contextElements = {
    editItem,
    toggleNewItemBar,
    editShopItem,
    toggleAlertModalBar,
    deleteItemAlert,
  };
  return (
    <ModalContext.Provider value={contextElements}>
      <StyledWrapper>
        <Navbar />
        {children}
        <StyledButtonIcon onClick={addItem}>
          <PlusIcon style={{ fontSize: 40, color: 'hsl(156, 100%, 99%)' }} />
        </StyledButtonIcon>
        <Modal isVisible={isNewItemBarVisible}>
          <ModalForm handleClose={toggleNewItemBar} editedProduct={itemEdited} />
        </Modal>
        <AlertModal isVisible={isAlertModalBarVisible} handleClose={toggleAlertModalBar}>
          {isDeleteAlert ? (
            <DeleteAlert handleClose={toggleAlertModalBar} editedProduct={itemEdited} />
          ) : (
            <ShoppingAlert handleClose={toggleAlertModalBar} editedProduct={itemEdited} />
          )}
        </AlertModal>
      </StyledWrapper>
    </ModalContext.Provider>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchItemsAction()),
  fetchCategories: () => dispatch(fetchCategoriesAction()),
});

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  products: PropTypes.array,
  fetchProducts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

UserPageTemplate.defaultProps = {
  products: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageTemplate);
