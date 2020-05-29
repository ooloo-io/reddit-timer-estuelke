import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('footer', () => {
  it('navigates to ooloo employers page when ooloo.io link is clicked', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const oolooLink = getByText('ooloo.io');
    expect(oolooLink.getAttribute('href')).toEqual('https://ooloo.io/employers');
  });

  it('navigates to home page when logo is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const logoLink = getByRole('link', { name: /sign\.svg/ });
    fireEvent.click(logoLink);
    expect(history.location.pathname).toEqual('/');
  });

  it('navigates to Terms page when Terms link is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const aboutLink = getByRole('link', { name: /Terms/ });
    fireEvent.click(aboutLink);

    expect(history.location.pathname).toEqual('/terms');
  });
});
