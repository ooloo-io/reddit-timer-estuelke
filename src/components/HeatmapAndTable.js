import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Heatmap from './Heatmap';
import PostTable from './PostTable';

const comparePosts = (post1, post2) => {
  const date1 = new Date(post1.createdAt * 1000);
  const date2 = new Date(post2.createdAt * 1000);
  const comparison = date1.getMinutes() - date2.getMinutes();
  if (comparison === 0) {
    return date1.getSeconds() - date2.getSeconds();
  }
  return comparison;
};


const HeatmapAndTable = ({ hasError, postsByHour, postCountByHour }) => {
  const [clickedCellId, setClickedCellId] = useState(null);
  const [day, hour] = clickedCellId ? clickedCellId.split('-') : [null, null];
  const clickedCellPosts = (day && hour && postCountByHour[day][hour])
    ? postsByHour[day][hour].sort(comparePosts)
    : null;

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
      {clickedCellPosts && <PostTable posts={clickedCellPosts} />}
    </>
  );
};

HeatmapAndTable.propTypes = {
  hasError: PropTypes.bool.isRequired,
  postsByHour: PropTypes.arrayOf(PropTypes.array).isRequired,
  postCountByHour: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default HeatmapAndTable;
