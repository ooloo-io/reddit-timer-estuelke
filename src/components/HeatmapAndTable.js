import React, { useEffect, useMemo, useState } from 'react';
import Heatmap from './Heatmap';
import PostTable from './PostTable';

const comparePosts = (post1, post2) => {
  if (post1.data.created_utc < post2.data.created_utc) {
    return -1;
  }
  if (post1.data.created_utc > post2.data.created_utx) {
    return 1;
  }
  return 0;
};

const getPostsAndCountByHour = (posts) => {
  const countsByHour = Array(7)
    .fill()
    .map(() => Array(24).fill(0));

  const postsByHour = Array(7)
    .fill()
    .map(() => Array(24).fill([]));

  posts.forEach((post) => {
    const date = new Date(post.data.created_utc * 1000);
    countsByHour[date.getDay()][date.getHours()] += 1;
    postsByHour[date.getDay()][date.getHours()].push(post);
  });

  return [countsByHour, postsByHour];
};

const HeatmapAndTable = ({ hasError, posts }) => {
  const [postCountByHour, postsByHour] = useMemo(
    () => getPostsAndCountByHour(posts), [posts],
  );
  const [clickedCellId, setClickedCellId] = useState(null);

  useEffect(() => {}, [clickedCellId]);

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
      {clickedCellId && <PostTable posts={posts} />}
    </>
  );
};

export default HeatmapAndTable;
