import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('App', () => {
  it('navigates to search page when subreddit is specified', () => {
    const history = createMemoryHistory();
    history.push('/search/subredditname');

    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    expect(history.location.pathname).toEqual('/search/subredditname');
  });

  it('redirects to home page when bad url passed', () => {
    const history = createMemoryHistory();
    history.push('/route/does/not/exist');

    render(
      <Router history={history}>
        <App />
      </Router>,
    );

    expect(history.location.pathname).toEqual('/');
  });
});
