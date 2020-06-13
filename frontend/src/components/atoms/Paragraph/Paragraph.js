import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};

  ${({ danger }) =>
    danger &&
    css`
      color: ${({ theme }) => theme.danger};
    `}

  ${({ success }) =>
    success &&
    css`
      color: ${({ theme }) => theme.success};
    `}
`;

export default Paragraph;
