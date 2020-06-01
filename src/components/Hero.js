import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { baseButtonStyle } from '../styles/themes';
import heatmap from '../assets/table.png';
import defaultSubreddit from '../helpers/constants';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1` 
  margin: 27px 0 9px 0;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const Subreddit = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 15px -1px 36px 0;
  letter-spacing: 0.25px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const CTAButton = styled(Link)`
  ${baseButtonStyle}
   margin: 32px 0;
   padding: 0 15px;
   text-decoration: none;
   display: flex;
   align-items: center;
`;

const Hero = () => (
  <Main>
    <Title>No reactions to your reddit posts?</Title>
    <SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </SubTitle>
    <CTAButton to={`/search/${defaultSubreddit}`}>
      Show me the best time
    </CTAButton>
    <Subreddit>
      r/
      {defaultSubreddit}
    </Subreddit>
    <Link to={`/search/${defaultSubreddit}`}>
      <Img src={heatmap} alt="Heatmap" />
    </Link>
  </Main>
);

export default Hero;
