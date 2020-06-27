import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  padding-bottom: 127px;
`;

const PostsTable = styled.table`
  max-width: 786px;
  width: 100%;
  margin: -2 auto 0;
  cell-collapse: 0;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.color.tableBorder};
`;

const TableHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 786px;
  width: 100%;
  margin: 0 auto;
`;

const Th = styled.th`
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.tableBorder};
  padding: 8px 12px;
  white-space: nowrap;
`;

const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.color.tableBorder};
  padding: 8px 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.small};
`;

const TitleTd = styled(Td)`
  max-width: 350px;
`;

const AuthorTd = styled(Td)`
  max-width: 104px;
`;

const TableLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.externalLink};
  font-size: ${({ theme }) => theme.font.size.small};
`;

const getTimePosted = (createdUTC) => {
  const date = new Date(createdUTC * 1000);
  const hourIn24 = date.getHours();
  const hourIn12 = ((hourIn24 + 11) % 12) + 1;
  const m = date.getMinutes();
  const minutes = m < 10 ? `0${m}` : m;

  return hourIn24 < 12 ? `${hourIn12}:${minutes} am` : `${hourIn12}:${minutes} pm`;
};

const getAuthorDisplay = (author) => {
  if (author === '[deleted]') {
    return author;
  }
  return (
    <TableLink as="a" href={`https://www.reddit.com/u/${author}`} target="_blank">
      {author}
    </TableLink>
  );
};

const PostTable = ({ posts }) => (
  <TableWrapper>
    <TableHeading>
      <h2>Posts</h2>
    </TableHeading>
    <PostsTable>
      <thead>
        <tr>
          <Th>Title</Th>
          <Th>Time Posted</Th>
          <Th>Score</Th>
          <Th>Comments</Th>
          <Th>Author</Th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.data.name}>
            <TitleTd>
              <TableLink
                as="a"
                href={`https://www.reddit.com${post.data.permalink}`}
                target="_blank"
              >
                {post.data.title}
              </TableLink>
            </TitleTd>
            <Td>{getTimePosted(post.data.created_utc)}</Td>
            <Td>{post.data.score}</Td>
            <Td>{post.data.num_comments}</Td>
            <AuthorTd>
              {getAuthorDisplay(post.data.author)}
            </AuthorTd>
          </tr>
        ))}
      </tbody>
    </PostsTable>
  </TableWrapper>
);

PostTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostTable;
