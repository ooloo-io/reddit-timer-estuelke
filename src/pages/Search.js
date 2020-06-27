import React, { useState, useEffect } from 'react';
import { useParams, withRouter, useHistory } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';
import Spinner from '../components/Spinner';
import HeatmapAndTable from '../components/HeatmapAndTable';
import useFetchPosts from '../hooks/useFetchPosts';


const Search = () => {
  const { subreddit: subredditQuery } = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(subredditQuery);
  const [posts, loading, hasError] = useFetchPosts(subredditQuery);

  const handleSubmit = (evt) => {
    history.push(`/search/${subreddit}`);
    evt.preventDefault();
  };

  const handleChange = (evt) => setSubreddit(evt.target.value);

  useEffect(() => {
    setSubreddit(subredditQuery);
  }, [subredditQuery]);

  return (
    <main>
      <SubredditForm
        subreddit={subreddit}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {loading ? <Spinner /> : <HeatmapAndTable hasError={hasError} posts={posts} />}
    </main>
  );
};

export default withRouter(Search);
