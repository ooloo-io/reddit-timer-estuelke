import React, { useState, useEffect } from 'react';
import { useParams, withRouter, useHistory } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';


const Search = () => {
  const { subreddit: subredditQuery } = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(subredditQuery);

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
    </main>
  );
};

export default withRouter(Search);
