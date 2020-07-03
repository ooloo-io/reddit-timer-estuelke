import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Author from './Author';

const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 127px;
  max-width: 786px;
  width: 100%;
  margin: 0 auto;
`;

const PostsTable = styled.table`
  margin: 1px auto 0;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
`;

const Headline = styled.h2`
  margin: 31px auto 10px;
  width: 100%;
`;

const TableCellStyle = css`
  padding: 9px 12px;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.color.tableBorder};
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.secondary};
`;

const Th = styled.th`
  text-align: left;
  ${TableCellStyle}
`;

const Td = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  ${TableCellStyle}
`;

const TitleTh = styled(Th)`
  width: 47.55%;
`;

const TimeTh = styled(Th)`
  width: 14.65%;
`;

const ScoreTh = styled(Th)`
  width: 8.2%;
`;

const CommentsTh = styled(Th)`
  width: 13.2%;
`;

const AuthorTh = styled(Th)`
  width: 16.5%;
`;

const TableLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.externalLink};
  font-size: ${({ theme }) => theme.font.size.small};
`;

const getTimePosted = (createdUTC) => {
  const date = new Date(createdUTC * 1000);
  const hourIn24 = date.getHours();
  const hourIn12 = hourIn24 % 12 || 12;
  const m = date.getMinutes();
  const minutes = m < 10 ? `0${m}` : m;

  return hourIn24 < 12 ? `${hourIn12}:${minutes} am` : `${hourIn12}:${minutes} pm`;
};


const PostTable = ({ posts }) => (
  <TableWrapper>
    <Headline>Posts</Headline>
    <PostsTable>
      <thead>
        <tr>
          <TitleTh>Title</TitleTh>
          <TimeTh>Time Posted</TimeTh>
          <ScoreTh>Score</ScoreTh>
          <CommentsTh>Comments</CommentsTh>
          <AuthorTh>Author</AuthorTh>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <Td>
              <TableLink
                as="a"
                href={`https://www.reddit.com${post.permalink}`}
                target="_blank"
              >
                {post.title}
              </TableLink>
            </Td>
            <Td>{getTimePosted(post.createdAt)}</Td>
            <Td>{post.score}</Td>
            <Td>{post.numComments}</Td>
            <Td>
              <Author author={post.author} />
            </Td>
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
