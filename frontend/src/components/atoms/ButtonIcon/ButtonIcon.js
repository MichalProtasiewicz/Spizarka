import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
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
