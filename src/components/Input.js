import styled from 'styled-components';

const TextInput = styled.input`
  padding: 0 17px;
  font-size: ${({ theme }) => theme.font.size.small};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.searchBoxBorder};
`;

export default TextInput;
