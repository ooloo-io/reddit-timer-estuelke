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
  }
  
  h2 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.color.secondary};
    margin-bottom: 14px;
    font-weight: 400;
  }
  
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
    searchBoxBorder: '#e6e6e6',
    spinner: '#fdb755',
    tableColumnHeader: '#787878',
    tableRowHeader: '#1E2537',
    tableBorder: '#dddddd',
    topGradient: '#fefefe',
    bottomGradient: '#e9e9e9',
    count: {
      0: '#e0e592',
      1: '#aed396',
      2: '#a9d194',
      3: '#a0ce93',
      4: '#99cd94',
      5: '#8cc894',
      6: '#5eb391',
      7: '#5db492',
      8: '#5cb391',
      9: '#5aad8c',
      10: '#3984a3',
    },
  },
  font: {
    primary: "'Montserrat', san-serif",
    secondary: "'Bitter', serif",
    size: {
      normal: '16px',
      medium: '15px',
      small: '14px',
    },
  },
  button: {
    background: '#fdb755',
    color: '#ffffff',
  },
};

export { GlobalStyle, mainTheme as default };
