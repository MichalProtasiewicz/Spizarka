import styled from 'styled-components';

const LanguageButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 12px 12px 12px 12px;
  background-color: ${({ theme }) => theme.white};
  border: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75% 75%;
  outline: none;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }
`;

export default LanguageButton;
