import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  outline: none;
  box-shadow: 0 2px ${({ theme }) => theme.grey100};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkBlue};
  }
  &:active {
    box-shadow: 0 1px ${({ theme }) => theme.grey200};
    color: ${({ theme }) => theme.grey200};
    transform: translateY(1px);
  }

  ${({ small }) =>
    small &&
    css`
      width: 30px;
      height: 30px;
      border-radius: 5px;
    `}
`;

export default ButtonIcon;
