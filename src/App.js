import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';


function App() {
  return (
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
  );
}

export default App;
