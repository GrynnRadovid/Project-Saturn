import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  test('renders login screen', () => {
    render(<LoginScreen />);
    const headingElement = screen.getByText(/Login/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(<LoginScreen />);
    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });

  test('handles form submission', () => {
    const mockSubmit = jest.fn();
    render(<LoginScreen onSubmit={mockSubmit} />);

    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.click(loginButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
  });
});