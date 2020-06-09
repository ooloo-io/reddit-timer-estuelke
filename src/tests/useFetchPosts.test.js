import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts from '../hooks/useFetchPosts';

describe('useFetchPosts', () => {
  it('returns 500 posts', async () => {
    const subreddit = 'javascript';
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(subreddit));
    jest.setTimeout(10000);

    await waitForNextUpdate();

    expect(result.current[0].length).toBe(500);
  });

  it('returns null if subreddit does not exist', async () => {
    const subreddit = 'this-subreddit-does-not-exist-probably';
    const { result, waitForNextUpdate } = renderHook(() => useFetchPosts(subreddit));
    jest.setTimeout(10000);

    await waitForNextUpdate();

    expect(result.current[0]).toBeNull();
  });
});
