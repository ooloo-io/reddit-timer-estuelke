import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import HeatmapCell from './HeatmapCell';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getPostCountByHour = (posts) => {
  const counts = Array(7)
    .fill()
    .map(() => Array(24).fill(0));

  posts.forEach((post) => {
    const date = new Date(post.data.created_utc * 1000);
    counts[date.getDay()][date.getHours()] += 1;
  });

  return counts;
};

const RowHeader = styled.td`
  color: ${({ theme }) => theme.color.background};
  background-color: ${({ theme }) => theme.color.tableRowHeader};
  text-align: center;
  width: 154px;
  height: 40px;
  padding: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.medium};
`;

const HeatmapGrid = ({ postCountByHour, clickedCellId, setClickedCellId }) => {
  // const postCountByHour = useMemo(() => getPostCountByHour(posts), [posts]);
  // const [clickedCellId, setClickedCellId] = useState(null);

  return (
    postCountByHour.map((days, day) => {
      const dayOfWeek = daysOfWeek[day];
      return (
        <tr key={dayOfWeek}>
          <RowHeader key={dayOfWeek}>
            {dayOfWeek}
          </RowHeader>
          {days.map((hourCount, hour) => {
            const id = `${dayOfWeek}-${hour}`;
            const colorValue = Math.min(hourCount, 10);
            return (
              <HeatmapCell
                colorValue={colorValue}
                key={id}
                id={id}
                handleCellClick={setClickedCellId}
                clickedCellId={clickedCellId}
              >
                {hourCount}
              </HeatmapCell>
            );
          })}
        </tr>
      );
    })
  );
};

export default React.memo(HeatmapGrid);
