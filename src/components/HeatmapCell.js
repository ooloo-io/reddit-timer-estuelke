import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableCell = styled.td`
  text-align: center;
  width: 39px;
  height: 39px;
  padding: 0;
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme, colorValue }) => theme.color.count[colorValue]};
  border: 1px solid ${({ theme, colorValue, clicked }) => (
    clicked ? theme.color.tableRowHeader : theme.color.count[colorValue]
  )};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.tableRowHeader};
  }
`;

const HeatmapCell = ({
  children, colorValue, handleCellClick, id, clickedCellId,
}) => (
  <TableCell
    colorValue={colorValue}
    clicked={clickedCellId === id}
    onClick={() => handleCellClick(id)}
  >
    {children}
  </TableCell>
);

HeatmapCell.propTypes = {
  children: PropTypes.node.isRequired,
  colorValue: PropTypes.number.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  clickedCellId: PropTypes.string.isRequired,
};

export default HeatmapCell;
