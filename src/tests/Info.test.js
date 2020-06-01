import React from 'react';
import { Router } from 'react-router-dom';
import { render, within } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('info', () => {
  it('navigates to ooloo employers page when ooloo.io link is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const infoSection = getByRole('article');
    const oolooLink = within(infoSection).getByRole('link', { name: /ooloo\.io/ });
    expect(oolooLink.getAttribute('href')).toEqual(
      'https://ooloo.io/employers',
    );
  });

  it('navigates to ooloo employers page when Click here for more information is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const infoSection = getByRole('article');
    const oolooLink = within(infoSection).getByRole('link', { name: /Click here for more information/ });
    expect(oolooLink.getAttribute('href')).toEqual(
      'https://ooloo.io/employers',
    );
  });
});
