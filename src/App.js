import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import mainTheme, { GlobalStyle } from './styles/themes';


function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
