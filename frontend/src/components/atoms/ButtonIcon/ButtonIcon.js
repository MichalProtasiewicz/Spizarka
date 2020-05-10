import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.blue};
  border: none;

  ${({ small }) =>
    small &&
    css`
      width: 30px;
      height: 30px;
      border-radius: 5px;
    `}
`;

export default ButtonIcon;
