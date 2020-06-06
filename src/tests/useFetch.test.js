import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../hooks/useFetch';

describe('useFetch', () => {
  it('returns 500 posts', async () => {
    const url = 'https://www.reddit.com/r/javascript/top.json?t=year&limit=500';
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    await waitForNextUpdate();
  });
});
