import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Unable to fetch data');
        }
        const data = await res.json();
        setResponse(data);
        setLoading(false);
      } catch {
        setLoading(false);
        setHasError(true);
      }
    };
    fetchData();
  }, [url]);
  return [response, loading, hasError];
};

export default useFetch;
