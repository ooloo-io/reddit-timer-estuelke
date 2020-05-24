import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bgColor};
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const mainTheme = {
  bgColor: '#fffff',
  color: {
    primary: '#93918f',
    secondary: '#000000',
    navigation: '#636363',
  },
  font: {
    primary: "'Montserrat', san-serif",
    secondary: "'Bitter', serif",
  },
};

/* Placeholder for updating the theme on the fly */
const currentTheme = mainTheme;

export { GlobalStyle, currentTheme as default };
