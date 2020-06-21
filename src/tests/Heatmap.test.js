import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';
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

    fetch
      .once(JSON.stringify(kittens1))
      .once(JSON.stringify(kittens2))
      .once(JSON.stringify(kittens3))
      .once(JSON.stringify(kittens4))
      .once(JSON.stringify(kittens5));
  });

  it('to contain post counts for each hour of each day', async () => {
    let tableCells;
    await act(async () => {
      const { findAllByRole } = renderSearchPage('/search/kittens');
      tableCells = await findAllByRole('cell');
    });

    expect(tableCells.length).toEqual(175); // Includes row headers
    expect(tableCells[1].innerHTML).toEqual('3'); // Sunday at 12:00am
  });

  it('cell highlights on click', async () => {
    const { findAllByRole } = renderSearchPage('/search/kittens');
    const tableCells = await findAllByRole('cell');

    const originalStyle = window.getComputedStyle(tableCells[1]);
    const originalBorder = originalStyle.getPropertyValue('border');
    expect(originalBorder).toEqual('1px solid #a0ce93');

    fireEvent.click(tableCells[1]);

    const updatedStyle = window.getComputedStyle(tableCells[1]);
    const updatedBorder = updatedStyle.getPropertyValue('border');
    expect(updatedBorder).toEqual('1px solid #1e2537');
  });
});
