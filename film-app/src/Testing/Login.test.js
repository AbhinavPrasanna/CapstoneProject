import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render,fireEvent,screen } from '@testing-library/react';
import LoginScreen from '../Components/LoginScreen';

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
test('Login Screen contains the SIGN UP text', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginText = getByText('LOGIN');
    expect(loginText).toBeInTheDocument();
});
test('Login Screen contains email form', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginEmail = screen.getByTestId('input-login-username');
    expect(loginEmail).toBeInTheDocument();
});

test('Login Screen contains password form', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginPassword = screen.getByTestId('input-login-password');
    expect(loginPassword).toBeInTheDocument();
    const isHidden = loginPassword.type === 'password';
    expect(isHidden).toBeTruthy();
});

test('Login Screen contains submit button', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginSubmitButton = screen.getByTestId('login-submitbutton');
    expect(loginSubmitButton).toBeInTheDocument();
});

test('Login Screen shows submit button as disabled when form is empty', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginSubmitButton = screen.getByTestId('login-submitbutton');
    expect(loginSubmitButton).toBeInTheDocument();
    expect(loginSubmitButton).toBeDisabled();
});

test('Login Screen shows submit when form is completed', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen/>
        </Router>
    );
    const loginEmail = screen.getByTestId('input-login-username');
    expect(loginEmail).toBeInTheDocument();
    fireEvent.change(loginEmail, {target: {value: correctuser.username}});
    const loginPassword = screen.getByTestId('input-login-password');
    expect(loginPassword).toBeInTheDocument();
    fireEvent.change(loginPassword, {target: {value: correctuser.password}});
    const isHidden = loginPassword.type === 'password';
    expect(isHidden).toBeTruthy();
    const loginSubmitButton = screen.getByTestId('login-submitbutton');
    expect(loginSubmitButton).toBeInTheDocument();
    expect(loginSubmitButton).toBeEnabled();
});

test('Login Screen shows disabled when the form is invalid with incorrect password', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginEmail = screen.getByTestId('input-login-username');
    expect(loginEmail).toBeInTheDocument();
    fireEvent.change(loginEmail, {target: {value: correctuser.username}});
    const loginPassword = screen.getByTestId('input-login-password');
    expect(loginPassword).toBeInTheDocument();
    fireEvent.change(loginPassword, {target: {value: incorrectuser1.password}});
    const isHidden = loginPassword.type === 'password';
    expect(isHidden).toBeTruthy();
    const loginSubmitButton = screen.getByTestId('login-submitbutton');
    expect(loginSubmitButton).toBeInTheDocument();
    expect(loginSubmitButton).toBeDisabled();
});
test('Login Screen shows disabled when the form is invalid with incorrect email', () => {
    const {getByText} = render(
        <Router>
            <LoginScreen />
        </Router>
    );
    const loginEmail = screen.getByTestId('input-login-username');
    expect(loginEmail).toBeInTheDocument();
    const loginPassword = screen.getByTestId('input-login-password');
    expect(loginPassword).toBeInTheDocument();
    fireEvent.change(loginPassword, {target: {value: correctuser.password}});
    const isHidden = loginPassword.type === 'password';
    expect(isHidden).toBeTruthy();
    const loginSubmitButton = screen.getByTestId('login-submitbutton');
    expect(loginSubmitButton).toBeInTheDocument();
    expect(loginSubmitButton).toBeDisabled();
});
