import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TableLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.externalLink};
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Author = (author) => {
  return author === '[deleted]' ? (
    <>author</>
  ) : (
    <TableLink
      as="a"
      href={`https://www.reddit.com/u/${author}`}
      target="_blank"
    >
      {author}
    </TableLink>
  );
};

export default Author;
