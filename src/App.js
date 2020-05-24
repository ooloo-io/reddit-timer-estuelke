import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Search from './pages/Search';
import currentTheme, { GlobalStyle } from './styles/themes';


function App() {
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
