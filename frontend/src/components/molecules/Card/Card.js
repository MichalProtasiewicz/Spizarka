import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  min-height: 100px;
  width: 200px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
`;

const Card = () => (
  <StyledWrapper>
    <Heading>Name</Heading>
    <button>X</button>
    <button>-</button>
    <div>3</div>
    <button>+</button>
  </StyledWrapper>
);

export default Card;
