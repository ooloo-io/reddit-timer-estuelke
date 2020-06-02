import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import defaultSubreddit from '../helpers/constants';

describe('header', () => {
  it('navigates to search page when search link is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const searchLink = getByRole('link', { name: /Search/ });
    fireEvent.click(searchLink);

    expect(history.location.pathname).toEqual(`/search/${defaultSubreddit}`);
  });

  it('navigates to home page when logo is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const logoLink = getByRole('link', { name: /logo\.svg/ });
    fireEvent.click(logoLink);
    expect(history.location.pathname).toEqual('/');
  });

  it('navigates to About section when About link is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const aboutLink = getByRole('link', { name: /About/ });
    fireEvent.click(aboutLink);

    expect(history.location.hash).toEqual('#about');
  });

  it('navigates to How it works section when How it works link is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const howItWorksLink = getByRole('link', { name: /How it works/ });
    fireEvent.click(howItWorksLink);

    expect(history.location.hash).toEqual('#how-it-works');
  });
});
