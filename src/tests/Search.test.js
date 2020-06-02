import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import defaultSubreddit from '../helpers/constants';

describe('Search', () => {
  it('input to be defaultSubreddit when clicking on Search link', () => {
    const history = createMemoryHistory();
    history.push('/search/wholesomememes');

    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const searchInput = getByRole('textbox');
    const searchLink = getByRole('link', { name: /Search/ });
    fireEvent.click(searchLink);

    expect(searchInput.value).toBe(defaultSubreddit);
  });

  it('input has subreddit from URL', () => {
    const history = createMemoryHistory();
    history.push('/search/CasualKnitting');

    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const searchInput = getByRole('textbox');

    expect(searchInput.value).toBe('CasualKnitting');
  });

  it('input changes when new subreddit is entered', () => {
    const history = createMemoryHistory();
    history.push('/search');

    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const searchInput = getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'IllegallySmolCats' } });
    expect(searchInput.value).toBe('IllegallySmolCats');
  });

  it('url changes when new subreddit is searched', () => {
    const history = createMemoryHistory();
    history.push('/search');

    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );
    const submitButton = getByRole('button', { name: /Search/i });
    const searchInput = getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'PeopleFuckingDying' } });
    fireEvent.click(submitButton);
    expect(history.location.pathname).toBe('/search/PeopleFuckingDying');
  });
});
