import styled from 'styled-components';

const TextInput = styled.input`
  height: 32px;
  margin: 0 10px;
  padding: 0 17px;
  font-size: ${({ theme }) => theme.font.size.small};
  max-width: 351px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.searchBoxBorder};
`;

export default TextInput;
