import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.blue};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75% 75%;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkBlue};
  }
  &:active {
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
