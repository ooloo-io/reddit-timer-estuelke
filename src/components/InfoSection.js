import React from 'react';
import PropTypes from 'prop-types';
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

InfoSection.propTypes = {
  headline: PropTypes.string.isRequired,
  sectionId: PropTypes.string,
  children: PropTypes.element,
};

InfoSection.defaultProps = {
  sectionId: '',
  children: undefined,
};

export default InfoSection;
