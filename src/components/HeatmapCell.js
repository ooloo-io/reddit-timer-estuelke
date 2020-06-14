import React, { useEffect, useState } from 'react';
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
    clicked ? theme.color.tablerowheader : theme.color.count[colorValue]
  )};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.tablerowheader};
  }
`;

const HeatmapCell = ({
  children, colorValue, handleCellClick, id, clickedCellId,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    handleCellClick(id);
  };

  useEffect(() => {
    if (clickedCellId === id) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [clickedCellId, id]);

  return (
    <TableCell
      colorValue={colorValue}
      clicked={clicked}
      onClick={handleClick}
    >
      {children}
    </TableCell>
  );
};

HeatmapCell.propTypes = {
  children: PropTypes.node.isRequired,
  colorValue: PropTypes.number.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  clickedCellId: PropTypes.string.isRequired,
};

export default HeatmapCell;
