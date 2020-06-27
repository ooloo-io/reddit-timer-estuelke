import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Heatmap from './Heatmap';
import PostTable from './PostTable';

const comparePosts = (post1, post2) => {
  const date1 = new Date(post1.data.created_utc * 1000);
  const date2 = new Date(post2.data.created_utc * 1000);
  const comparison = date1.getMinutes() - date2.getMinutes();
  if (comparison === 0) {
    return date1.getSeconds() - date2.getSeconds();
  }
  return comparison;
};

const getPostsAndCountByHour = (posts) => {
  const countsByHour = Array(7)
    .fill()
    .map(() => Array(24).fill(0));

  const postsByHour = {};

  posts.forEach((post) => {
    const date = new Date(post.data.created_utc * 1000);
    const day = date.getDay();
    const hour = date.getHours();

    countsByHour[day][hour] += 1;
    if (postsByHour[day] && postsByHour[day][hour]) {
      postsByHour[day][hour].push(post);
    } else if (postsByHour[day]) {
      postsByHour[day][hour] = [post];
    } else {
      postsByHour[day] = {};
      postsByHour[day][hour] = [post];
    }
  });

  return [countsByHour, postsByHour];
};

const HeatmapAndTable = ({ hasError, posts }) => {
  const [postCountByHour, postsByHour] = useMemo(
    () => getPostsAndCountByHour(posts), [posts],
  );
  const [clickedCellId, setClickedCellId] = useState(null);
  const [clickedCellPosts, setClickedCellPosts] = useState(null);
  const [postTableIsVisible, setPostTableIsVisible] = useState(false);

  useEffect(() => {
    if (clickedCellId) {
      const [day, hour] = clickedCellId.split('-');

      const postCountForCell = postCountByHour[day][hour];
      if (postCountForCell === 0) {
        setPostTableIsVisible(false);
      } else {
        const postsForCell = postsByHour[day][hour];
        postsForCell.sort(comparePosts);

        setPostTableIsVisible(true);
        setClickedCellPosts(postsForCell);
      }
    }
  }, [clickedCellId, postCountByHour, postsByHour]);

  if (hasError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      <Heatmap
        postCountByHour={postCountByHour}
        clickedCellId={clickedCellId}
        setClickedCellId={setClickedCellId}
      />
      {postTableIsVisible && <PostTable posts={clickedCellPosts} />}
    </>
  );
};

HeatmapAndTable.propTypes = {
  hasError: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeatmapAndTable;
