import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as TimerLogo } from '../assets/logo.svg';


const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 80px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2px;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.navigation};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.primary};
  margin-left: 26px;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/" title="header-logo-link">
      <TimerLogo />
    </Link>
    <Nav>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/#how-it-works">How it works</NavLink>
      <NavLink to="/#about">About</NavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;
