import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';


const Search = () => {
  const { subredditQuery } = useParams();
  const [subreddit, setSubreddit] = useState(subredditQuery);
  const [redirect, setRedirect] = useState(null);

  const handleSubmit = (evt) => {
    setRedirect(`/search/${subreddit}`);
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

  if (redirect) {
    return (
      <>
        <Redirect to={redirect} />
        {searchPage}
      </>
    );
  }

  return searchPage;
};

export default Search;
