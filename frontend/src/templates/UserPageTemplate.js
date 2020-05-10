import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from '@material-ui/icons/Add';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0 50px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;

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
      <StyledButtonIcon onClick={toggleNewItemBar}>
        <PlusIcon style={{ fontSize: 40, color: 'hsl(156, 100%, 99%)' }} />
      </StyledButtonIcon>
      <NewItemBar isVisible={isNewItemBarVisible} handleClose={toggleNewItemBar} />
    </StyledWrapper>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
