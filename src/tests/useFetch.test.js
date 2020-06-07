import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../hooks/useFetch';

describe('useFetch', () => {
  it('returns 500 posts', async () => {
    const url = 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100&after=t3_cetrkq';
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    await waitForNextUpdate();
    // Not implemented yet
  });
});
