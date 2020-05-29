import React from 'react';
import { useParams } from 'react-router-dom';


const Search = () => {
  const { subreddit = 'javascript' } = useParams();
  return (
    <main>
      Search placeholder:
      { subreddit }
    </main>
  );
};


export default Search;
