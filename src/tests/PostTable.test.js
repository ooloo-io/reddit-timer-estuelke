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

describe('PostTable', () => {
  beforeEach(() => {
    fetch.resetMocks();

    fetch
      .once(JSON.stringify(kittens1))
      .once(JSON.stringify(kittens2))
      .once(JSON.stringify(kittens3))
      .once(JSON.stringify(kittens4))
      .once(JSON.stringify(kittens5));
  });

  it('to not be visible when no cell is clicked', () => {
    const { queryByRole } = renderSearchPage('/search/kittens');
    const section = queryByRole('article');

    expect(section).toBe(null);
  });

  it('to not be visible when cell post count is zero', async () => {
    let tableCells;
    let postTableSection;

    await act(async () => {
      const { findAllByRole, queryByRole } = renderSearchPage('/search/kittens');
      tableCells = await findAllByRole('cell');

      fireEvent.click(tableCells[2]);

      postTableSection = queryByRole('article');
    });

    expect(tableCells[2].innerHTML).toEqual('0'); // Sunday at 1:00am
    expect(postTableSection).toBe(null);
  });

  it('to be visible when cell clicked', async () => {
    let tableCells;
    let postTableSection;

    await act(async () => {
      const { findAllByRole, findByRole } = renderSearchPage('/search/kittens');
      tableCells = await findAllByRole('cell');

      fireEvent.click(tableCells[1]);

      postTableSection = await findByRole('article');
    });

    expect(tableCells[1].innerHTML).toEqual('3'); // Sunday at 12:00am
    expect(postTableSection).not.toBeNull();
  });

  it('to contain links to reddit post', async () => {
    let tableCells;
    let postLink;

    await act(async () => {
      const { findAllByRole, findByRole } = renderSearchPage('/search/kittens');
      tableCells = await findAllByRole('cell');

      fireEvent.click(tableCells[16]); // Sunday at 3:00pm

      postLink = await findByRole('link', { name: /My new baby/i });
    });

    expect(tableCells[16].innerHTML).toEqual('5'); // Sunday at 3:00pm
    expect(postLink.href).toBe(
      'https://www.reddit.com/r/kittens/comments/g4dpgn/my_new_baby8_weeks/',
    );
    expect(postLink.target).toBe('_blank');
    expect(postLink.rel).toBe('noopener noreferrer');
  });

  it('to contain links to reddit author (if not deleted)', async () => {
    let tableCells;
    let authorLink;

    await act(async () => {
      const { findAllByRole, findByRole } = renderSearchPage('/search/kittens');
      tableCells = await findAllByRole('cell');

      fireEvent.click(tableCells[16]); // Sunday at 3:00pm

      authorLink = await findByRole('link', { name: /madametrix/i });
    });

    expect(tableCells[16].innerHTML).toEqual('5'); // Sunday at 3:00pm
    expect(authorLink.href).toBe('https://www.reddit.com/u/madametrix');
    expect(authorLink.target).toBe('_blank');
    expect(authorLink.rel).toBe('noopener noreferrer');
  });

  it('to does not contain a link if author is [deleted]', async () => {
    let tableCells;
    let deletedAuthor;
    let deletedAuthorLink;

    await act(async () => {
      const { findAllByRole, findByText, queryByRole } = renderSearchPage('/search/kittens');
      tableCells = await findAllByRole('cell');

      fireEvent.click(tableCells[16]); // Sunday at 3:00pm

      deletedAuthor = await findByText(/deleted/i);
      deletedAuthorLink = queryByRole('link', { name: /\[deleted\]/i });
    });

    expect(tableCells[16].innerHTML).toEqual('5'); // Sunday at 3:00pm
    expect(deletedAuthor).not.toBeNull();
    expect(deletedAuthorLink).toBeNull();
  });
});
