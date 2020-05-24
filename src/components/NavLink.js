import React from 'react';
import styled from 'styled-components';


const NavLink = ({ className, children, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.navigation};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.primary};
  margin-left: 26px;
`;

export default StyledNavLink;
