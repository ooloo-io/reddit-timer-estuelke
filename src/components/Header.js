import React from 'react';
import styled from 'styled-components';
import StyledNavLink from './NavLink';
import { ReactComponent as TimerLogo } from '../assets/logo.svg';


const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 80px;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => (
  <HeaderWrapper>
    <a href="/">
      <div>
        <TimerLogo />
      </div>
    </a>
    <NavWrapper>
      <StyledNavLink href="/search?subreddit=javascript">Search</StyledNavLink>
      <StyledNavLink href="#how-it-works">How it works</StyledNavLink>
      <StyledNavLink href="#about">About</StyledNavLink>
    </NavWrapper>
  </HeaderWrapper>
);

export default Header;
