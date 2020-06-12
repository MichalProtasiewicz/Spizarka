import styled from 'styled-components';

const ErrorLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.danger};
`;

export default ErrorLabel;
