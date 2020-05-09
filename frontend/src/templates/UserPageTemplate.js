import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0 50px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: yellow;
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;

const UserPageTemplate = ({ children }) => {

  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);

  const toggleNewItemBar = () => {
    return setIsNewItemBarVisible(!isNewItemBarVisible);
  };

  return (
    <StyledWrapper>
      <Navbar />
      {children}
      <StyledButtonIcon onClick={toggleNewItemBar} icon={plusIcon} />
      <NewItemBar isVisible={isNewItemBarVisible} handleClose={toggleNewItemBar}/>
    </StyledWrapper>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
