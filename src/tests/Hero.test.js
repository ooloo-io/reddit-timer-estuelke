import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('hero section', () => {
  it('navigates to search page with default javascript when cta button is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const ctaButton = getByRole('link', { name: /Show me the best time/i });
    fireEvent.click(ctaButton);

    expect(history.location.pathname).toEqual('/search/javascript');
  });

  it('navigates to search page with default javascript when heatmap image is clicked', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const heatmapLink = getByRole('img', { name: /Heatmap/ });
    fireEvent.click(heatmapLink);
    expect(history.location.pathname).toEqual('/search/javascript');
  });
});
