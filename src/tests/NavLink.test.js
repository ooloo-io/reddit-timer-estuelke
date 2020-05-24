import React from 'react';
import renderer from 'react-test-renderer';
import StyledNavLink from '../components/NavLink';
import mainTheme from '../styles/themes';

describe('StyledNavLink', () => {
  it('renders correctly with theme passed', () => {
    const component = renderer.create(
      <StyledNavLink theme={mainTheme}>Test Link</StyledNavLink>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('StyledNavLink', () => {
  it('renders correctly without theme passed', () => {
    const component = renderer.create(
      <StyledNavLink>Test Link</StyledNavLink>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
