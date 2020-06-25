import styled from 'styled-components';

const NotificationWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.raisinBlack};
  color: ${({ theme }) => theme.white};
  text-align: center;
`;
export default NotificationWrapper;
