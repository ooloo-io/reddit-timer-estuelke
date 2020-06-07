import { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Unable to fetch data');
        }

        const data = await res.json();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setHasError(true);
      }
    };
    fetchData();
  }, [url]);
  return [response, loading, hasError];
};

export default useFetch;
