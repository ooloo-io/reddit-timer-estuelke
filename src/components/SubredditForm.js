import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.color};
  border: none;
  height: 36px;
`;

const SearchInput = styled.input`
  height: 36px;
  margin-left: 10px;
  padding-left: 10px;
  line-height: 36px;
  font-size: ${({ theme }) => theme.font.size.small};
  max-width: 370px;
  border: 1px solid ${({ theme }) => theme.color.searchBoxBorder};
`;

const SubredditForm = ({ subreddit }) => (
  <FormWrapper>
    <h1>Find the best time for a subreddit</h1>
    <Form>
      <label htmlFor="subreddit">
        <span>r/</span>
        <SearchInput type="text" id="subreddit" name="subreddit" value={subreddit} />
      </label>

      <Button type="submit">Search</Button>
    </Form>
  </FormWrapper>
);


export default SubredditForm;
