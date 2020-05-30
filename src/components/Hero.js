import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heatmap from '../assets/table.png';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 38px;
  margin: 27px 0 9px 0;
  font-weight: normal;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

const ImageTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 15px -1px 36px 0;
  letter-spacing: 0.25px;
`;

const CTAButton = styled.button`
   color: ${({ theme }) => theme.button.color};
   background-color: ${({ theme }) => theme.button.background};
   font-size: 14px;
   text-transform: uppercase;
   border: none;
   border-radius: 4px;
   margin: 32px 0;
   padding: 0 15px 0 16px;
   height: 36px;
`;

const Hero = () => (
  <Main>
    <Title>No reactions to your reddit posts?</Title>
    <SubTitle>
      Great timing, great results! Find the best time to post on your
      subreddit.
    </SubTitle>
    <Link to="/search/javascript">
      <CTAButton>Show me the best time</CTAButton>
    </Link>
    <ImageTitle>r/javascript</ImageTitle>
    <Link to="/search/javascript">
      <img src={heatmap} alt="Heatmap" />
    </Link>
  </Main>
);

export default Hero;
