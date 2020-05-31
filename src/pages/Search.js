import React from 'react';
import { useParams } from 'react-router-dom';
import defaultSubreddit from '../helpers/constants';

const Search = () => {
  const { subreddit = defaultSubreddit } = useParams();
  return (
    <main>
      Search placeholder:
      { subreddit }
    </main>
  );
};


export default Search;
