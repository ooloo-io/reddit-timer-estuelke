import fetchMock from 'jest-fetch-mock';
import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts from '../hooks/useFetchPosts';
import * as kittens1 from './responses/1.json';
import * as kittens2 from './responses/2.json';
import * as kittens3 from './responses/3.json';
import * as kittens4 from './responses/4.json';
import * as kittens5 from './responses/5.json';

fetchMock.enableMocks();

describe('useFetchPosts', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns null and hasError if subreddit does not exist', async () => {
    const subreddit = 'this-subreddit-does-not-exist-probably';
    fetch.mockReject(new Error('no sub'));

    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(subreddit));

    await waitForNextUpdate();

    expect(result.current[0]).toBeNull();
    expect(result.current[2]).toBeTruthy(); // hasError
  });

  it('returns 500 posts', async () => {
    const subreddit = 'kittens';
    const expectedCalls = [
      ['https://www.reddit.com/r/kittens/top.json?t=year&limit=100'],
      ['https://www.reddit.com/r/kittens/top.json?t=year&limit=100&after=t3_fway6f'],
      ['https://www.reddit.com/r/kittens/top.json?t=year&limit=100&after=t3_fx2q9a'],
      ['https://www.reddit.com/r/kittens/top.json?t=year&limit=100&after=t3_egly7y'],
      ['https://www.reddit.com/r/kittens/top.json?t=year&limit=100&after=t3_dlyl14'],
    ];
    fetch
      .once(JSON.stringify(kittens1))
      .once(JSON.stringify(kittens2))
      .once(JSON.stringify(kittens3))
      .once(JSON.stringify(kittens4))
      .once(JSON.stringify(kittens5));

    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(subreddit));

    await waitForNextUpdate();
    expect(result.current[0].length).toBe(500);
    expect(fetch.mock.calls).toEqual(expectedCalls);
  });
});
