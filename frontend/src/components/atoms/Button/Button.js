import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  padding: 0;
  background-color: ${({ theme }) => theme.blue};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
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

  ${({ danger }) =>
    danger &&
    css`
      background-color: ${({ theme }) => theme.danger};
      &:hover {
        background-color: ${({ theme }) => theme.darkDanger};
      }
    `}

    ${({ success }) =>
      success &&
      css`
        background-color: ${({ theme }) => theme.success};
        &:hover {
          background-color: ${({ theme }) => theme.darkSuccess};
        }
      `}

  ${({ small }) =>
    small &&
    css`
      width: 105px;
      height: 30px;
      font-size: 12px;
    `}
`;

export default Button;
