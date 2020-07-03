import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TableLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.externalLink};
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Author = ({ author }) => {
  if (author === '[deleted]') {
    return <>{author}</>;
  }
  return (
    <TableLink
      as="a"
      href={`https://www.reddit.com/u/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </TableLink>
  );
};

Author.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Author;
