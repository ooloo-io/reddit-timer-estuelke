import React, { useState, useEffect } from 'react';
import { useParams, withRouter, useHistory, useReducer } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';
import Spinner from '../components/Spinner';
import Heatmap from '../components/Heatmap';
import PostTable from '../components/PostTable';
import useFetch from '../hooks/useFetch';


const getFetchUrl = (subredditName, after = null, count = null) => {
  const reddit = 'https://www.reddit.com/r';
  const params = 'top.json?t=year&limit=100';

  if (after && count) {
    return `${reddit}/${subredditName}/${params}&after=${after}&count=${count}`;
  }

  return `${reddit}/${subredditName}/${params}`;
};


const Search = () => {
  const { subreddit: subredditQuery } = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(subredditQuery);
  const [url, setUrl] = useState(getFetchUrl(subreddit));
  const [count, setCount] = useState(0);
  const [response, loading, hasError] = useFetch(url);

  const handleSubmit = (evt) => {
    history.push(`/search/${subreddit}`);
    setUrl(getFetchUrl(subreddit));
    evt.preventDefault();
  };

  const handleChange = (evt) => setSubreddit(evt.target.value);

  useEffect(() => {
    setSubreddit(subredditQuery);
    setUrl(getFetchUrl(subredditQuery));
  }, [subredditQuery]);

  useEffect(() => {
    if (response && count < 500) {
      const { after } = response.data;

      setUrl(getFetchUrl(subreddit, after, count));
      setCount(count + 100);
    }
  }, [url, response, count]);

  const HeatmapAndTable = () => {
    if (hasError) {
      return <div>Error loading data</div>;
    }
    return (
      <>
        <Heatmap />
        <PostTable posts={response.data.children} />
      </>
    );
  };

  return (
    <main>
      <SubredditForm
        subreddit={subreddit}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {loading ? <Spinner /> : <HeatmapAndTable />}
    </main>
  );
};

export default withRouter(Search);
