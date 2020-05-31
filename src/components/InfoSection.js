import React from 'react';
import styled from 'styled-components';


const Heading = styled.h2`
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.secondary};
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 14px;
`;

const InfoSection = ({ headline, sectionId, children }) => {
  const headingId = sectionId || headline.replace(/\s/g, '-').toLowerCase();
  return (
    <>
      <Heading id={headingId}>{headline}</Heading>
      {children}
    </>
  );
};

export default InfoSection;
