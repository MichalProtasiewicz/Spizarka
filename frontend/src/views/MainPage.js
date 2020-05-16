import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardsList from 'components/organisms/CardsList/CardsList';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Modal from 'components/organisms/Modal/Modal';
import ModalForm from 'components/molecules/ModalForm/ModalForm';
import ModalContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from '@material-ui/icons/Add';

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;

  z-index: 10000;
`;

const MainPage = ({ products }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);

/*  API CONTEXT itemEdited={product} // itemEdited=null     useContext??
  const addItem = () => {
    itemEdited: null,
  }

  const editItem = e => {
    const id = e.target.value;

    const itemEdited = products.filter(item => {
      return item.id === id;
    });
  };
*/
  const toggleNewItemBar = () => {
    return setIsNewItemBarVisible(!isNewItemBarVisible);
  };
  return (
    <UserPageTemplate>
      <ModalContext.Provider value={toggleNewItemBar}>
        <StyledHeading big>Lista produktów</StyledHeading>
        <CardsList items={products} />
        <StyledButtonIcon onClick={toggleNewItemBar}>
          <PlusIcon style={{ fontSize: 40, color: 'hsl(156, 100%, 99%)' }} />
        </StyledButtonIcon>
        <Modal isVisible={isNewItemBarVisible}>
          <ModalForm handleClose={toggleNewItemBar} />
        </Modal>
      </ModalContext.Provider>
    </UserPageTemplate>
  );
};

const mapStateToProps = ({ products }) => ({ products });

MainPage.propTypes = {
  products: PropTypes.array,
};

MainPage.defaultProps = {
  products: [],
};

export default connect(mapStateToProps)(MainPage);
