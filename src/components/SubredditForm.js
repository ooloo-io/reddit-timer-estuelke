import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubredditForm = ({ subreddit }) => (
  <>
    <h1>Find the best time for a subreddit</h1>
    <Form>
      <label htmlFor="subreddit">
        <span>r/</span>
        <input type="text" id="subreddit" name="subreddit" value={subreddit} />
      </label>

      <button type="submit">Search</button>
    </Form>
  </>
);


SubredditForm.defaultProps = {
  subreddit: 'PUT DEFAULT SUBREDDIT HERE!',
};

SubredditForm.propTypes = {
  subreddit: PropTypes.string,
};

export default SubredditForm;
