import React from 'react';
import { useParams } from 'react-router-dom';
import defaultSubreddit from '../helpers/constants';
import SubredditForm from '../components/SubredditForm';


const Search = () => {
  const { subreddit = defaultSubreddit } = useParams();
  return (
    <main>
      <SubredditForm subreddit={subreddit} />
    </main>
  );
};


export default Search;
