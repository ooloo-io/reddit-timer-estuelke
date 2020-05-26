import React from 'react';
import { useParams } from 'react-router-dom';


const Search = () => {
  const { subreddit = 'javascript' } = useParams();
  return (
    <div>
      Search placeholder:
      { subreddit }
    </div>
  );
};


export default Search;
