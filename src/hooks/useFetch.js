import { useEffect, useState } from 'react';

const fetchUrl = (url, after, count, limit = 100, time = 'year') => {
  const urlParams = `t=${time}&limit=${limit}${
    count && after ? `&after=${after}&count${count}` : ''
  }`;
  return `${url}/top.json?${urlParams}`;
};

const makeRequest = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }

  const data = await res.json();
  return data;
};

const fetchPosts = async (
  url,
  posts = [],
  count = null,
  after = null,
  numRequests = 500,
) => {
  if (count >= numRequests) {
    return posts;
  }

  const currentUrl = fetchUrl(url, after, count);

  const data = await makeRequest(currentUrl);

  const recordsRetrieved = data.data.dist;
  posts.push(...data.data.children);

  if (recordsRetrieved < 100) {
    return posts;
  }

  const currentCount = count + recordsRetrieved;
  const currentAfter = data.data.after;

  return fetchPosts(url, posts, currentCount, currentAfter);
};

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchPosts(url);
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
