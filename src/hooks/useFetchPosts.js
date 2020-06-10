import { useEffect, useState } from 'react';

const createUrl = (subreddit, after, limit = 100, time = 'year') => {
  const url = `https://www.reddit.com/r/${subreddit}`;
  let urlParams = `top.json?t=${time}&limit=${limit}`;
  if (after) {
    urlParams += `&after=${after}`;
  }
  return `${url}/${urlParams}`;
};

const makeRequest = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }

  return res.json();
};

const fetchPosts = async (subreddit, posts = [], after = null, maxPosts = 500) => {
  if (posts.length >= maxPosts) {
    return posts;
  }
  const currentUrl = createUrl(subreddit, after);

  const data = await makeRequest(currentUrl);

  const numPostsRetrieved = data.data.dist;
  const newPosts = posts.concat(data.data.children);

  if (numPostsRetrieved < 100) {
    return newPosts;
  }

  const currentAfter = data.data.after;

  return fetchPosts(subreddit, newPosts, currentAfter);
};

const useFetchPosts = (subreddit) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchPosts(subreddit);
        setPosts(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [subreddit]);
  return [posts, loading, hasError];
};

export default useFetchPosts;
