import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';
import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts from '../hooks/useFetchPosts';
import App from '../App';
import * as kittens1 from './responses/1.json';
import * as kittens2 from './responses/2.json';
import * as kittens3 from './responses/3.json';
import * as kittens4 from './responses/4.json';
import * as kittens5 from './responses/5.json';

fetchMock.enableMocks();

const renderSearchPage = (route) => render(
  <MemoryRouter initialEntries={[route]}>
    <App />
  </MemoryRouter>,
);

describe('Heatmap', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('to contain post counts for each hour of each day', async () => {
    fetch
      .once(JSON.stringify(kittens1))
      .once(JSON.stringify(kittens2))
      .once(JSON.stringify(kittens3))
      .once(JSON.stringify(kittens4))
      .once(JSON.stringify(kittens5));
    const { waitForNextUpdate } = renderHook(() => useFetchPosts('kittens'));

    await waitForNextUpdate();
    await act(async () => {
      const { getAllByRole } = renderSearchPage('/search/kittens');
    });
    // Not implemented yet
  });
});
