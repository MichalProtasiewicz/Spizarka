import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 550px;
  padding: 7vh 70px 0 70px;
  background-color: ${({ theme }) => theme.white};
  border-left: 10px solid ${({ theme }) => theme.blue};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 10vh 40px 0 40px;
  }
`;

const Modal = ({ isVisible, children }) => (
  <StyledWrapper isVisible={isVisible}>
    {children}
  </StyledWrapper>
);

Modal.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.element,
};

Modal.defaultProps = {
  isVisible: false,
  children: null,
};

export default Modal;
