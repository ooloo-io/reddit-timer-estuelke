import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseButtonStyle } from '../styles/themes';


const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
`;

const Button = styled.button`
  ${baseButtonStyle}
  width: 92px;
`;

const SearchInput = styled.input`
  height: 32px;
  margin: 0 9px;
  padding-left: 17px;
  font-size: ${({ theme }) => theme.font.size.small};
  max-width: 351px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.searchBoxBorder};
`;

const SubredditForm = ({ subreddit, handleSubmit, handleChange }) => (
  <FormWrapper>
    <h1>Find the best time for a subreddit</h1>
    <Form onSubmit={handleSubmit}>
      <div>r /</div>
      <SearchInput
        type="text"
        id="subreddit"
        name="subreddit"
        defaultValue={subreddit}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  </FormWrapper>
);

SubredditForm.propTypes = {
  subreddit: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubredditForm;
