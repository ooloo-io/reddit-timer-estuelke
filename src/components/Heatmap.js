import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeatmapCell from './HeatmapCell';

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

const hoursOfDay = ['12', '2', '4', '6', '8', '10'];

const createTimeHeader = (period) => (
  hoursOfDay.map((hour) => {
    const timeLabel = `${hour}:00${period}`;
    return (
      <TableHeader colSpan="2" key={timeLabel}>
        {timeLabel}
      </TableHeader>
    );
  })
);

const getCounts = (posts) => {
  const counts = Array(7).fill().map(() => Array(24).fill(0));

  posts.forEach((post) => {
    const date = new Date(post.data.created_utc * 1000);
    counts[date.getDay()][date.getHours()] += 1;
  });

  return counts;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Table = styled.table`
  border-spacing: 0;
  cell-collapse: 0;
`;

const TableHeader = styled.th`
  background-image: linear-gradient(
    ${({ theme }) => theme.color.topgradient},
    ${({ theme }) => theme.color.bottomgradient}
  );
  border: none;
  height: 52px;
  padding: 0;
  color: ${({ theme }) => theme.color.tablecolumnheader};
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const RowHeader = styled.td`
  color: ${({ theme }) => theme.color.background};
  background-color: ${({ theme }) => theme.color.tablerowheader};
  text-align: center;
  width: 154px;
  height: 40px;
  padding: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.medium};
`;

const TimezoneWrapper = styled.div`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Timezone = styled.span`
    font-weight: bold;
`;

const Heatmap = ({ posts }) => {
  const [counts] = useState(getCounts(posts));
  const [clickedCellId, setClickedCellId] = useState('');

  const handleCellClick = (cellId) => {
    setClickedCellId(cellId);
  };

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            {createTimeHeader('am')}
            {createTimeHeader('pm')}
          </tr>
        </thead>
        <tbody>
          {counts.map((days, day) => {
            const dayOfWeek = daysOfWeek[day];
            return (
              <tr key={dayOfWeek}>
                <RowHeader key={dayOfWeek}>{dayOfWeek}</RowHeader>
                {days.map((hourCount, hour) => {
                  const id = `${dayOfWeek}-${hour}`;
                  const colorValue = Math.min(hourCount, 10);
                  return (
                    <HeatmapCell
                      colorValue={colorValue}
                      key={id}
                      id={id}
                      handleCellClick={handleCellClick}
                      clickedCellId={clickedCellId}
                    >
                      {hourCount}
                    </HeatmapCell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <TimezoneWrapper>
        All times are shown in your timezone:
        {' '}
        <Timezone>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Timezone>
      </TimezoneWrapper>
    </Wrapper>
  );
};

Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Heatmap;
