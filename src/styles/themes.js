import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.size.normal};
    color: ${({ theme }) => theme.color.primary};
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 38px;
    font-weight: normal;
  
    #root {
    position: relative;
    min-height: 100vh;
  }
`;

const mainTheme = {
  color: {
    background: '#ffffff',
    primary: '#93918f',
    secondary: '#000000',
    navigation: '#636363',
    externalLink: '#0087ff',
  },
  font: {
    primary: "'Montserrat', san-serif",
    secondary: "'Bitter', serif",
    size: {
      normal: '16px',
      small: '14px',
    },
  },
  button: {
    background: '#fdb755',
    color: '#ffffff',
  },
};

export { GlobalStyle, mainTheme as default };
