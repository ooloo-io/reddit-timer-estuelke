import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as FooterLogo } from '../assets/sign.svg';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin: auto;
  padding: 0 20px;
`;

const FooterLink = styled(Link)`
  flex: 1;
  color: ${({ theme }) => theme.color.navigation};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  margin-right: 1px;
`;

const Footer = () => (
  <FooterWrapper>
    <Nav>
      <FooterLink
        as="a"
        href="https://ooloo.io/employers"
      >
        ooloo.io
      </FooterLink>
      <Link to="/">
        <FooterLogo />
      </Link>
      <FooterLink to="/terms" style={{ textAlign: 'right', marginBottom: '2px' }}>
        Terms &amp; Privacy
      </FooterLink>
    </Nav>
  </FooterWrapper>
);

export default Footer;
