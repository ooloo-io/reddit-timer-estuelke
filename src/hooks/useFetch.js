import { useEffect, useState } from 'react';

const requestPosts = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }

  const data = await res.json();
  return data;
};

const aggregatePosts = async (baseUrl, numRequested = 500) => {
  const posts = [];
  let count = 0;
  let url = baseUrl;

  while (count < numRequested) {
    const data = await requestPosts(url);

    if (data.data.dist < 100) {
      break;
    }

    posts.push(...data.data.children);
    count += data.data.dist;
    url = `${baseUrl}&after=${data.data.after}&count=${count}`;
  }

  return posts;
};

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
        // const data = await aggregatePosts(url);
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
