import React from 'react';
import styled from 'styled-components';
import InfoSection from './InfoSection';


const Article = styled.article`
  width: 100%;
  max-width: 738px;
  margin: 0 auto;
  padding: 111px 20px 200px;
  line-height: 27px;
`;

const AboutDiv = styled.div`
    letter-spacing: 0.03px;
`;

const List = styled.ul`
  margin: 0px 0 105px;
  padding: 0;
  list-style: none inside none;
`;

const ListItem = styled.li`
  :before {
    content: '•';
    margin-right: 4px;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.externalLink};
`;

const Info = () => (
  <Article>
    <InfoSection headline="How it works">
      <List>
        <ListItem>
          We find the 500 top posts from the past year for a subreddit.
        </ListItem>
        <ListItem>
          The data is visualized in a heatmap grouped by weekday and hour of the
          day.
        </ListItem>
        <ListItem>See immediately when to submit your reddit post.</ListItem>
      </List>
    </InfoSection>
    <InfoSection headline="About">
      <AboutDiv>
        This app was created during a course on
        {' '}
        <ExternalLink href="https://ooloo.io/employers">ooloo.io</ExternalLink>{' '}
        with the goal to implement a pixel-perfect real-world application with
        professional workflows and tools like Kanban, Asana, Zeplin, GitHub,
        pull requests and code reviews.
        {' '}
        <ExternalLink href="https://ooloo.io/employers">
          Click here for more information.
        </ExternalLink>
      </AboutDiv>
    </InfoSection>
  </Article>
);

export default Info;
