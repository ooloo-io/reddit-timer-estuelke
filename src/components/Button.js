import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.button.color};
  background-color: ${({ theme }) => theme.button.background};
  font-size: ${({ theme }) => theme.font.size.small};
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  height: 36px;
  padding: 0 16px;
`;

export default Button;
