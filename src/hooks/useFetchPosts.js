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


const transformPostData = (post) => ({
  author: post.data.author,
  createdAt: post.data.created_utc,
  name: post.data.name,
  numComments: post.data.num_comments,
  permalink: post.data.permalink,
  score: post.data.score,
  title: post.data.title,
});

const getPostsAndCountByHour = (posts) => {
  const countsByHour = Array(7)
    .fill()
    .map(() => Array(24).fill(0));

  const postsByHour = Array(7)
    .fill()
    .map(() => Array(24).fill([]));

  // const postsByHour = {};

  posts.forEach((post) => {
    const date = new Date(post.data.created_utc * 1000);
    const day = date.getDay();
    const hour = date.getHours();

    countsByHour[day][hour] += 1;
    postsByHour[day][hour].push(transformPostData(post));
    // if (postsByHour[day] && postsByHour[day][hour]) {
    //   postsByHour[day][hour].push(post);
    // } else if (postsByHour[day]) {
    //   postsByHour[day][hour] = [post];
    // } else {
    //   postsByHour[day] = {};
    //   postsByHour[day][hour] = [post];
    // }
  });

  return [countsByHour, postsByHour];
};

const useFetchPosts = (subreddit) => {
  const [postsByHour, setPostsByHour] = useState(null);
  const [countByHour, setCountByHour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchPosts(subreddit);
        const [counts, posts] = getPostsAndCountByHour(data);

        setPostsByHour(posts);
        setCountByHour(counts);
      } catch (error) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [subreddit]);
  return [postsByHour, countByHour, loading, hasError];
};

export default useFetchPosts;
