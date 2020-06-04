import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import defaultSubreddit from '../helpers/constants';

const renderSearchPage = (route) => (
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
);

describe('Search', () => {
  it('input to be defaultSubreddit when clicking on Search link', () => {
    const { getByRole } = renderSearchPage('/search/wholesomememes');
    const searchInput = getByRole('textbox');
    const headerSearchLink = getByRole('link', { name: /Search/ });

    fireEvent.click(headerSearchLink);

    expect(searchInput.value).toBe(defaultSubreddit);
  });

  it('input has subreddit from URL', () => {
    const { getByRole } = renderSearchPage('/search/CasualKnitting');
    const searchInput = getByRole('textbox');

    expect(searchInput.value).toBe('CasualKnitting');
  });

  it('input changes when new subreddit is entered', () => {
    const { getByRole } = renderSearchPage('/search');
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
