import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0 50px;
`;

const UserPageTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Navbar />
      {children}
    </StyledWrapper>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
