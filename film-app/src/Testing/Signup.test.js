import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render,fireEvent,screen } from '@testing-library/react';
import SignUpScreen from '../Components/SignUpScreen';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signUp } from ""; // Replace with the actual import path
import { initializeTestApp, auth } from "@firebase/rules-unit-testing";

jest.mock('../Context/AuthContext', () => ({
    useAuth: () => ({
      authUser: null, // Mocked authUser
      setAuthUser: jest.fn(),
      isLoggedIn: false, // Mocked isLoggedIn
      setIsLoggedIn: jest.fn(),
      authUsers: [], // Mocked authUsers as an empty array
      setAuthUsers: jest.fn(),
    }),
  }));

  const app = initializeTestApp({
    projectId: "your-project-id",
    auth,
  });

  const assert = require()
  
  const { test } = require("@jest/globals");


const correctuser ={
    username: 'abhinav2k01@gmail.com',
    firstname: 'Abhinav',
    lastname: 'Kumar',
    password: 'cognizantrocks234'
}




const incorrectuser1 = {
    username: 'abhinav',
    firstname: 'abhinav2k01',
    lastname: 'kumar3245',
    password: 'cognizant'

}

test('Signup Screen contains the SIGN UP text', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpText = getByText('SIGN UP');
    expect(signUpText).toBeInTheDocument();
});
test('Signup Screen contains email form', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpEmail = screen.getByTestId('input-signup-username');
    expect(signUpEmail).toBeInTheDocument();
});

test('Signup Screen contains first name form', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpFirstName = screen.getByTestId('input-signup-firstname');
    expect(signUpFirstName).toBeInTheDocument();
});

test('Signup Screen contains last name form', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpLastName = screen.getByTestId('input-signup-lastname');
    expect(signUpLastName).toBeInTheDocument();
});

test('Signup Screen contains password form', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpPassword = screen.getByTestId('input-signup-password');
    expect(signUpPassword).toBeInTheDocument();

    const isHidden = signUpPassword.type === 'password';
    expect(isHidden).toBeTruthy();
});

test('Signup Screen contains submit button', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpSubmitButton = screen.getByTestId('signup-submitbutton');
    expect(signUpSubmitButton).toBeInTheDocument();
});

test('Signup Screen shows submit button as disabled when form is empty', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpSubmitButton = screen.getByTestId('signup-submitbutton');
    expect(signUpSubmitButton).toBeInTheDocument();
    expect(signUpSubmitButton).toBeDisabled();
});

test('SignUp Screen shows submit when form is completed', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpEmail = screen.getByTestId('input-signup-username');
    expect(signUpEmail).toBeInTheDocument();
    fireEvent.change(signUpEmail, {target: {value: correctuser.username}});

    const signUpFirstName = screen.getByTestId('input-signup-firstname');
    expect(signUpFirstName).toBeInTheDocument();
    fireEvent.change(signUpFirstName, {target: {value: correctuser.firstname}});

    const signUpLastName = screen.getByTestId('input-signup-lastname');
    expect(signUpLastName).toBeInTheDocument();
    fireEvent.change(signUpLastName, {target: {value: correctuser.lastname}});

    const signUpPassword = screen.getByTestId('input-signup-password');
    expect(signUpPassword).toBeInTheDocument();

    fireEvent.change(signUpPassword, {target: {value: correctuser.password}});
    const isHidden = signUpPassword.type === 'password';
    expect(isHidden).toBeTruthy();

    const signUpSubmitButton = screen.getByTestId('signup-submitbutton');
    expect(signUpSubmitButton).toBeInTheDocument();
    expect(signUpSubmitButton).toBeEnabled();
});

test('SignUp Screen shows disabled when the form is invalid with incorrect password', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpEmail = screen.getByTestId('input-signup-username');
    expect(signUpEmail).toBeInTheDocument();

    fireEvent.change(signUpEmail, {target: {value: correctuser.username}});
    const signUpFirstName = screen.getByTestId('input-signup-firstname');
    expect(signUpFirstName).toBeInTheDocument();

    fireEvent.change(signUpFirstName, {target: {value: correctuser.firstname}});
    const signUpLastName = screen.getByTestId('input-signup-lastname');
    expect(signUpLastName).toBeInTheDocument();

    fireEvent.change(signUpLastName, {target: {value: correctuser.lastname}});
    const signUpPassword = screen.getByTestId('input-signup-password');
    expect(signUpPassword).toBeInTheDocument();

    fireEvent.change(signUpPassword, {target: {value: incorrectuser1.password}});
    const isHidden = signUpPassword.type === 'password';
    expect(isHidden).toBeTruthy();

    const signUpSubmitButton = screen.getByTestId('signup-submitbutton');
    expect(signUpSubmitButton).toBeInTheDocument();
    expect(signUpSubmitButton).toBeDisabled();
});
test('SignUp Screen shows disabled when the form is invalid with incorrect email', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );

    const signUpEmail = screen.getByTestId('input-signup-username');
    expect(signUpEmail).toBeInTheDocument();
    fireEvent.change(signUpEmail, {target: {value: incorrectuser1.username}});

    const signUpFirstName = screen.getByTestId('input-signup-firstname');
    expect(signUpFirstName).toBeInTheDocument();
    fireEvent.change(signUpFirstName, {target: {value: correctuser.firstname}});

    const signUpLastName = screen.getByTestId('input-signup-lastname');
    expect(signUpLastName).toBeInTheDocument();
    fireEvent.change(signUpLastName, {target: {value: correctuser.lastname}});

    const signUpPassword = screen.getByTestId('input-signup-password');
    expect(signUpPassword).toBeInTheDocument();
    fireEvent.change(signUpPassword, {target: {value: correctuser.password}});

    const isHidden = signUpPassword.type === 'password';
    expect(isHidden).toBeTruthy();

    const signUpSubmitButton = screen.getByTestId('signup-submitbutton');
    expect(signUpSubmitButton).toBeInTheDocument();
    expect(signUpSubmitButton).toBeDisabled();
});

test('SignUp Screen shows disabled when the form is invalid with incorrect first name', () => {
    const {getByText} = render(
        <Router>
            <SignUpScreen />
        </Router>
    );
    const signUpEmail = screen.getByTestId('input-signup-username');
    expect(signUpEmail).toBeInTheDocument();
    fireEvent.change(signUpEmail, {target: {value: correctuser.username}});

    const signUpFirstName = screen.getByTestId('input-signup-firstname');
    expect(signUpFirstName).toBeInTheDocument();
    fireEvent.change(signUpFirstName, {target: {value: incorrectuser1.firstname}});

    const signUpLastName = screen.getByTestId('input-signup-lastname');
    expect(signUpLastName).toBeInTheDocument();
    fireEvent.change(signUpLastName, {target: {value: correctuser.lastname}});

    const signUpPassword = screen.getByTestId('input-signup-password');
    expect(signUpPassword).toBeInTheDocument();
    fireEvent.change(signUpPassword, {target: {value: correctuser.password}});

    const isHidden = signUpPassword.type === 'password';
    expect(isHidden).toBeTruthy();

    const signUpSubmitButton = screen.getByTestId('signup-submitbutton');
    expect(signUpSubmitButton).toBeInTheDocument();
    expect(signUpSubmitButton).toBeDisabled();
});
test("signUp should create a user", async () => {
    const username = "testuser";
    const password = "testpassword";
    const firstname = "John";
    const lastname = "Doe";
  
    // Mock the createUserWithEmailAndPassword function
    const createUserWithEmailAndPasswordMock = jest.fn(() => Promise.resolve());
  
    // Replace the actual function with the mock
    createUserWithEmailAndPassword.mockImplementation(createUserWithEmailAndPasswordMock);
  
    const setAuthUser = jest.fn();
    const setAuthUsers = jest.fn();
    const setIsLoggedIn = jest.fn();
    const navigate = jest.fn();
  
    // Call the signUp function
    await signUp({
      preventDefault: jest.fn(),
    });
  
    // Assertions
    expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(auth, username, password);
    expect(setAuthUser).toHaveBeenCalledWith(new User(firstname, username, lastname, password));
    // Add more assertions as needed
  });