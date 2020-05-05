import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import crossIcon from 'assets/icons/cross.svg';
import minusIcon from 'assets/icons/minus.svg';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70% 30%;
  position: relative;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
`;

const StyledSpan = styled.span`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  align-self: center;
  justify-self: center;
`;

const Close = styled(ButtonIcon)`
  position: absolute;
  left: 180px;
  top: -10px;
`;

const Card = () => (
  <StyledWrapper>
    <StyledSpan>Name</StyledSpan>
    <Close icon={crossIcon} small red />
    <QuantityWrapper>
      <ButtonIcon icon={minusIcon} red />
      <StyledSpan big>5</StyledSpan>
      <ButtonIcon icon={plusIcon} green />
    </QuantityWrapper>
  </StyledWrapper>
);

export default Card;
