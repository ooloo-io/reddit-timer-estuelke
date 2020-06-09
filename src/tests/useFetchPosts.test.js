import { renderHook, act } from '@testing-library/react-hooks';
import useFetchPosts from '../hooks/useFetchPosts';

describe('useFetch', () => {
  it('returns 500 posts', async () => {
    const url = 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100&after=t3_cetrkq';
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(url));

    await waitForNextUpdate();
    // Not implemented yet
  });
});
