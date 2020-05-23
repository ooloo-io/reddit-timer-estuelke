import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    font-family: ${({ theme }) => theme.font.primary};
  }
`;

const mainTheme = {
  bgColor: '#fffff',
  font: {
    primary: "'Montserrat', san-serif",
    secondary: "'Bitter', serif",
  },
};

export { GlobalStyle, mainTheme as default };
