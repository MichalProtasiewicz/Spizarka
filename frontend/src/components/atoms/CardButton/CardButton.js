import styled, { css } from 'styled-components';

const CardButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  padding: 12px 12px 12px 12px;
  background-color: ${({ theme }) => theme.white};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75% 75%;
  border: 3px solid ${({ theme }) => theme.black};
  border-radius: 6px;
  box-shadow: 0 2px ${({ theme }) => theme.grey100};
  outline: none;
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
