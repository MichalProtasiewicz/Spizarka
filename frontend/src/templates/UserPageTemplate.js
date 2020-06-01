import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'components/organisms/Modal/Modal';
import ModalForm from 'components/molecules/ModalForm/ModalForm';
import ModalContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from '@material-ui/icons/Add';
import Navbar from 'components/organisms/Navbar/Navbar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 100px 50px 50px 50px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 10000;
`;

const UserPageTemplate = ({ children, products }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);
  const [itemEdited, setItemEdited] = useState(null);

  const toggleNewItemBar = () => {
    return setIsNewItemBarVisible(!isNewItemBarVisible);
  };

  const addItem = () => {
    setItemEdited(null);
    toggleNewItemBar();
  };

  const editItem = (e) => {
    const id = e.target.value;
    const itemEditedTmp = products.filter((item) => {
      return item.id == id;
    });
    setItemEdited(itemEditedTmp[0]);
    toggleNewItemBar();
  };

  const contextElements = {
    editItem,
    toggleNewItemBar,
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
      </StyledWrapper>
    </ModalContext.Provider>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  products: PropTypes.array,
};

UserPageTemplate.defaultProps = {
  products: [],
};

export default connect(mapStateToProps)(UserPageTemplate);
