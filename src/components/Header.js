import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as TimerLogo } from '../assets/logo.svg';


const HeaderWrapper = styled.header`

`;

const Header = () => (
  <>
    <TimerLogo />
    <div>Search</div>
    <div>How it works</div>
    <div>About</div>
  </>
);

export default Header;
