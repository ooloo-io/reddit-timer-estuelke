import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Terms from './pages/Terms';


const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/search/:subredditQuery?">
      <Search />
    </Route>
    <Route exact path="/terms">
      <Terms />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
