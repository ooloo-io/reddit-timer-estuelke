import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './Input';
import defaultSubreddit from '../helpers/constants';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
  white-space: nowrap;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
`;

const SubredditForm = ({ subreddit, handleSubmit, handleChange }) => (
  <FormWrapper>
    <h1>Find the best time for a subreddit</h1>
    <Form onSubmit={handleSubmit}>
      <div>r /</div>
      <TextInput
        type="text"
        name="subreddit"
        value={subreddit || defaultSubreddit}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  </FormWrapper>
);

SubredditForm.propTypes = {
  subreddit: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

SubredditForm.defaultProps = {
  subreddit: defaultSubreddit,
};

export default SubredditForm;
