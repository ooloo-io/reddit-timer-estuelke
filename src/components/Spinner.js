import React from 'react';
import styled, { keyframes } from 'styled-components';


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const InnerSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid ${({ theme }) => theme.color.spinner};
  border-bottom: 6px solid ${({ theme }) => theme.color.background};
  border-radius: 50%;
  animation: 1.5s ${spin} linear infinite;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 56px auto 0;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <InnerSpinner />
  </SpinnerWrapper>
);

export default Spinner;
