import React, { useState, useEffect } from 'react';
import { useParams, withRouter, useHistory } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';
import Spinner from '../components/Spinner';
import useFetch from '../hooks/useFetch';

const getFetchUrl = (subredditName) => `https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=500`;

const Search = () => {
  const { subreddit: subredditQuery } = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(subredditQuery);
  const [url, setUrl] = useState(getFetchUrl(subreddit));
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

  return (
    <main>
      <SubredditForm
        subreddit={subreddit}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {loading ? <Spinner /> : (
        <div>
          {response.data.map((data) => <div>{data}</div>)}
        </div>
      )}
    </main>
  );
};

export default withRouter(Search);
