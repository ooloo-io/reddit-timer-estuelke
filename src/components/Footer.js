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
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px;
`;

const baseLinkStyle = css`
  color: ${({ theme }) => theme.color.navigation};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 0.9rem;
`;

const FooterLink = styled(Link)`
  ${baseLinkStyle}
`;

const LogoLink = styled(FooterLink)`
  margin-left: 59px;
`;

const ExternalLink = styled.a`
  ${baseLinkStyle}
  margin-bottom: 1px;
`;


const Footer = () => (
  <FooterWrapper>
    <Nav>
      <ExternalLink
        href="https://ooloo.io/employers"
      >
        ooloo.io
      </ExternalLink>
      <LogoLink to="/">
        <FooterLogo />
      </LogoLink>
      <FooterLink to="/terms">
        Terms &amp; Privacy
      </FooterLink>
    </Nav>
  </FooterWrapper>
);

export default Footer;
