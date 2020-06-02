import React, { useState } from 'react';
import { Redirect, useParams, withRouter } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';
import defaultSubreddit from '../helpers/constants';


const Search = () => {
  const { subredditQuery } = useParams();
  const [subreddit, setSubreddit] = useState(subredditQuery || defaultSubreddit);
  const [route, setRoute] = useState(null);

  const handleSubmit = (evt) => {
    setRoute(`/search/${subreddit}`);
    evt.preventDefault();
  };

  const handleChange = (evt) => setSubreddit(evt.target.value);

  const searchPage = (
    <main>
      <SubredditForm
        subreddit={subreddit}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </main>
  );

  if (route) {
    return (
      <>
        <Redirect to={route} />
        {searchPage}
      </>
    );
  }

  return searchPage;
};

export default withRouter(Search);
