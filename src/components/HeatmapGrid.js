import React from 'react';
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

const HeatmapGrid = ({ postsByHour, clickedCellId, setClickedCellId }) => (
  postsByHour.map((days, day) => {
    const dayOfWeek = daysOfWeek[day];
    return (
      <tr key={dayOfWeek}>
        <RowHeader key={dayOfWeek}>
          {dayOfWeek}
        </RowHeader>
        {days.map((posts, hour) => {
          const id = `${day}-${hour}`;
          const numOfPosts = posts.length;
          const colorValue = Math.min(numOfPosts, 10);
          return (
            <HeatmapCell
              colorValue={colorValue}
              key={id}
              id={id}
              handleCellClick={setClickedCellId}
              clickedCellId={clickedCellId}
            >
              {numOfPosts}
            </HeatmapCell>
          );
        })}
      </tr>
    );
  })
);


export default React.memo(HeatmapGrid);
