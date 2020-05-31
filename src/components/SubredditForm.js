import React from 'react';
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


export default SubredditForm;
