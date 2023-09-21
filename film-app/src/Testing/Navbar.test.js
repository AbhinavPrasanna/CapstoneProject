import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { render,fireEvent, queryByTestId, screen } from '@testing-library/react';
import SignUpScreen from '../Components/SignUpScreen';
import LoginScreen from '../Components/LoginScreen';

test('Navbar contains the CINEMANIA logo', () => {
    const { getByText } = render(
        <Router>
          <Navbar />
        </Router>
      );
    const logoElement = getByText('CINEMANIA');
    expect(logoElement).toBeInTheDocument();
  });
  
  test('Navbar contains Sign Up button', () => {
    const { getByText } = render(
        <Router>
          <Navbar />
        </Router>
      );
    const signUpButton = getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
  });
  
  test('Navbar contains Login button', () => {
    const { getByText } = render(
        <Router>
          <Navbar />
        </Router>
      );
    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  test('Navbar goes to Sign Up Screen', () => {
        const { getByText} = render(
          <Router>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<SignUpScreen />} />
            </Routes>
          </Router>
        );
        const signUpButton = getByText('Sign Up');
        fireEvent.click(signUpButton);
        const signUpScreen = getByText('SIGN UP');
        expect(signUpScreen).toBeInTheDocument();
        const signUpEmail = screen.getByTestId('input-signup-username');
        expect(signUpEmail).toBeInTheDocument();
        const signUpFirstName = screen.getByTestId('input-signup-firstname');
        expect(signUpFirstName).toBeInTheDocument();
        const signUpLastName = screen.getByTestId('input-signup-lastname');
        expect(signUpLastName).toBeInTheDocument();
        const signUpPassword = screen.getByTestId('input-signup-password');
        expect(signUpPassword).toBeInTheDocument();
});

test('Navbar goes to Login In Screen', () => {
    const { getByText} = render(
      <Router>
        <Navbar />
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    );
    const signUpButton = getByText('Login');
    fireEvent.click(signUpButton);
    const signUpScreen = getByText('LOGIN');
    expect(signUpScreen).toBeInTheDocument();
    const signUpEmail = screen.getByTestId('input-login-username');
    expect(signUpEmail).toBeInTheDocument();
    const signUpPassword = screen.getByTestId('input-login-password');
    expect(signUpPassword).toBeInTheDocument();
});
       


  