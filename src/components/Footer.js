import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as TimerLogo } from '../assets/logo.svg';

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
`;

const Footer = () => (
  <FooterWrapper>
    <footer>Footer Placeholder</footer>
  </FooterWrapper>
);

export default Footer;
