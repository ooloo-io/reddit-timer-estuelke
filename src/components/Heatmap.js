import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeatmapGrid from './HeatmapGrid';
import HeatmapHoursHeader from './HeatmapHoursHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 59px;
`;

const Table = styled.table`
  border-spacing: 0;
  cell-collapse: 0;
`;

const TimezoneWrapper = styled.div`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Timezone = styled.span`
  font-weight: bold;
`;

const Heatmap = ({ postCountByHour, clickedCellId, setClickedCellId }) => (
  <Wrapper>
    <Table>
      <HeatmapHoursHeader />
      <tbody>
        <HeatmapGrid
          postCountByHour={postCountByHour}
          clickedCellId={clickedCellId}
          setClickedCellId={setClickedCellId}
        />
      </tbody>
    </Table>
    <TimezoneWrapper>
      All times are shown in your timezone:
      {' '}
      <Timezone>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Timezone>
    </TimezoneWrapper>
  </Wrapper>
);

Heatmap.propTypes = {
  postCountByHour: PropTypes.arrayOf(PropTypes.array),
  clickedCellId: PropTypes.string,
  setClickedCellId: PropTypes.func.isRequired,
};

Heatmap.defaultProps = {
  postCountByHour: null,
  clickedCellId: null,
};

export default Heatmap;
