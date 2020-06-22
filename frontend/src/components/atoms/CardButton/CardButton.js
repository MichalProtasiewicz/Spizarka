import styled, { css } from 'styled-components';

const CardButton = styled.button`
  position: absolute;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white};
  border: 3px solid ${({ theme }) => theme.black};
  width: 24px;
  height: 24px;
  border-radius: 6px;
  padding: 12px 12px 12px 12px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75% 75%;
  outline: none;
  box-shadow: 0 2px ${({ theme }) => theme.grey100};
  cursor: pointer;

  &:active {
    box-shadow: 0 1px ${({ theme }) => theme.grey200};
    transform: translateY(1px);
  }
  &:hover {
    border-color: ${({ theme }) => theme.danger};
  }

  ${({ green }) =>
    green &&
    css`
      &:hover {
        border-color: ${({ theme }) => theme.success};
      }
    `}
`;

export default CardButton;
