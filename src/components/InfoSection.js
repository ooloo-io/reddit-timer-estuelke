import React from 'react';
import PropTypes from 'prop-types';


const InfoSection = ({ headline, sectionId, children }) => {
  const headingId = sectionId || headline.replace(/\s/g, '-').toLowerCase();
  return (
    <>
      <h2 id={headingId}>{headline}</h2>
      {children}
    </>
  );
};

InfoSection.propTypes = {
  headline: PropTypes.string.isRequired,
  sectionId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InfoSection.defaultProps = {
  sectionId: null,
};

export default InfoSection;
