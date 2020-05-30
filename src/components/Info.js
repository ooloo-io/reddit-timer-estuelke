import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  width: 100%;
  max-width: 739px;
  margin: 130px auto 0;
  padding: 0 20px 185px;

  > p {
    line-height: 26.98px;
    letter-spacing: 0.03px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.secondary};
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 14px;
`;

const List = styled.ul`
  margin: 0px 0 105px;
  padding: 0;
  list-style-position: inside;
`;

const ListItem = styled.li`
  font-size: 10px;
  margin-left: 1px;
  line-height: 25px;
  > span {
    position: relative;
    left: -5px;
    font-size: ${({ theme }) => theme.font.size.normal};
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.externalLink};
`;

const Info = () => (
  <Article>
    <Heading id="how-it-works">How it works</Heading>
    <List>
      <ListItem>
        <span>We find the 500 top posts from the past year for a subreddit.</span>
      </ListItem>
      <ListItem>
        <span>
          The data is visualized in a heatmap grouped by weekday and hour of the
          day.
        </span>
      </ListItem>
      <ListItem><span>See immediately when to submit your reddit post.</span></ListItem>
    </List>
    <Heading id="about">About</Heading>
    <p>
      This app was created during a course on
      {' '}
      <ExternalLink href="https://ooloo.io/employers">ooloo.io</ExternalLink>
      {' '}
      with the goal to implement a pixel-perfect real-world application with
      professional workflows and tools like Kanban, Asana, Zeplin, GitHub, pull
      requests and code reviews.
      {' '}
      <ExternalLink href="https://ooloo.io/employers">
        Click here for more information.
      </ExternalLink>
    </p>
  </Article>
);

export default Info;
