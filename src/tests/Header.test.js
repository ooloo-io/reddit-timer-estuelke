import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import mainTheme from '../styles/themes';

const renderHeader = () => (
  render(
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Header theme={mainTheme} />
      </Router>
    </ThemeProvider>,
  ));

describe('header', () => {
  it('contains a logo that links to home page', () => {
    const { getByTitle, getByText } = renderHeader();
    const logoElement = getByText('logo.svg');
    const logoLinkElement = getByTitle('header-logo');

    expect(logoElement).toBeInTheDocument();
    expect(logoLinkElement).toContainHTML('href="/"');
  });

  it('contains a link to the search page', () => {
    const { getByText } = renderHeader();
    const searchElement = getByText(/^Search$/);

    expect(searchElement).toBeInTheDocument();
    expect(searchElement).toContainHTML('href="/search"');
  });

  it('contains a link to the about section', () => {
    const { getByText } = renderHeader();
    const aboutElement = getByText(/^About$/);

    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toContainHTML('href="/#about"');
  });

  it('contains a link to the How it works section', () => {
    const { getByText } = renderHeader();
    const howItWorksElement = getByText(/^How it works$/);

    expect(howItWorksElement).toBeInTheDocument();
    expect(howItWorksElement).toContainHTML('href="/#how-it-works"');
  });
});
