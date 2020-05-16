import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.blue};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 550px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;

`;

const Modal = ({ isVisible, children }) => (
  <StyledWrapper isVisible={isVisible}>
    {children}
  </StyledWrapper>
);

Modal.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Modal.defaultProps = {
  isVisible: false,
};

export default Modal;
