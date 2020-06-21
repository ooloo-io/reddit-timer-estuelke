import React from 'react';
import styled from 'styled-components';

const hoursOfDay = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

const TableHeader = styled.th`
  background-image: linear-gradient(
    ${({ theme }) => theme.color.topGradient},
    ${({ theme }) => theme.color.bottomGradient}
  );
  border: none;
  height: 52px;
  padding: 0;
  color: ${({ theme }) => theme.color.tableColumnHeader};
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const HeatmapHoursHeader = () => (
  <thead>
    <tr>
      <th>&nbsp;</th>
      {hoursOfDay.map((hour) => (
        <TableHeader colSpan="2" key={hour}>
          {hour}
        </TableHeader>
      ))}
    </tr>
  </thead>
);

export default HeatmapHoursHeader;
