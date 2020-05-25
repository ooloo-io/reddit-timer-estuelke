import React from 'react';
import { useParams } from 'react-router-dom';


const Search = () => {
  const { subreddit } = useParams();
  return (
    <div>
      Search placeholder:
      { subreddit || 'javascript' }
    </div>
  );
};


export default Search;
