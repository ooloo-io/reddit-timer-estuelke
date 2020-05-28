import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('header', () => {
  it('navigates to search page when search link is clicked', () => {
    render(<App />);

    expect(screen.getByTitle('home')).toBeInTheDocument();
    expect(screen.queryByTitle('search')).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: /Search/ }));
    expect(screen.getByTitle('search')).toBeInTheDocument();
    expect(screen.queryByTitle('home')).not.toBeInTheDocument();
  });

  it('navigates to home page when logo is clicked', () => {
    render(<App />);

    userEvent.click(screen.getByTitle('header-logo-link'));
    expect(screen.getByTitle('home')).toBeInTheDocument();
    expect(screen.queryByTitle('search')).not.toBeInTheDocument();
  });

  it('navigates to About section when About link is clicked', () => {
    render(<App />);

    userEvent.click(screen.getByRole('link', { name: /About/ }));
    // How to test that it scrolled to the section?
    expect(screen.queryByTitle('search')).not.toBeInTheDocument();
  });

  it('navigates to How it works section when How it works link is clicked', () => {
    render(<App />);

    userEvent.click(screen.getByRole('link', { name: /How it works/ }));
    // How to test that it scrolled to the section?
    expect(screen.queryByTitle('search')).not.toBeInTheDocument();
  });
});
