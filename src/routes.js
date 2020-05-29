import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/search/:subreddit?">
      <Search />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
