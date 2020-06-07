import React from 'react';
import PropTypes from 'prop-types';

const PostTable = ({ posts }) => (
  <>
    <div>Data Table Placeholder</div>
    {posts.slice(0, 10).map((post) => (
      <div key={post.data.name}>{post.data.title}</div>
    ))}
  </>
);

PostTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostTable;
