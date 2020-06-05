import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Unable to fetch data');
      }
      setResponse(response.data);
      setLoading(false);
    } catch {
      setLoading(false);
      setHasError(true);
    }
  }, []);

  return [response, loading, hasError];
};

export default useFetch;
