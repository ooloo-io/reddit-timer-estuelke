import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 127px;
`;

const PostsTable = styled.table`
  max-width: 786px;
  width: 100%;
  margin: 1px auto 0;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
`;

const H2Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 786px;
  width: 100%;
  margin: 31px auto 10px;
`;

const H2 = styled.h2`
  margin: 0;
`;

const Th = styled.th`
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.tableBorder};
  padding: 9px 12px;
  white-space: nowrap;
`;

const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.color.tableBorder};
  padding: 9px 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.small};
`;

const TitleTh = styled(Th)`
  width: 47.55%;
  // max-width: 350px;
`;

const TimeTh = styled(Th)`
  width: 14.65%;
  // max-width: 90px;
`;

const ScoreTh = styled(Th)`
  width: 8.2%;
  // max-width: 40px;
`;

const CommentsTh = styled(Th)`
  width: 13.2%;
  // max-width: 80px;
`;

const AuthorTh = styled(Th)`
  width: 16.5%;
  // max-width: 104px;
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
    <H2Wrapper>
      <H2>Posts</H2>
    </H2Wrapper>
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
          <tr key={post.data.name}>
            <Td>
              <TableLink
                as="a"
                href={`https://www.reddit.com${post.data.permalink}`}
                target="_blank"
              >
                {post.data.title}
              </TableLink>
            </Td>
            <Td>{getTimePosted(post.data.created_utc)}</Td>
            <Td>{post.data.score}</Td>
            <Td>{post.data.num_comments}</Td>
            <Td>
              {getAuthorDisplay(post.data.author)}
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
