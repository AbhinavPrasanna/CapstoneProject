import {validEmail, validFirstName, validLastName, validPassword} from '../utils/Regex';
const ValidEmails = [
    'abhinav2k01@gmail.com',
    'example@email.com',
    'user123@example123.com',
    'user.name@example-mail.com',
  ];
  
  const InvalidEmails = [
    'abhinav',
    'invalid.email.com',
    'user@example.c1',
    'user..name@example.com',
    'user!name@example.com',
    'user@.com',
    'user@example.',
  ];

  const ValidPasswords = [
    'cognizantrocks234',
    'abc123',
    'password123',
    'P@ssw0rd',
  ];
  
  const InvalidPasswords = [
    'cognizant',
    'password',
    '123456',
    'a1B',
    'pass word123',
    '!@#$%^&*()',
    '',
  ];

  const validFirstNames = [
    'Abhinav',
    'abcdefg',
    'XYZ',
    'HelloWorld',
  ];
  
  const InvalidFirstNames = [
    'abhinav2k01',
    'Hello World',
    'abc123',
    '',
    '@#$%^',
    'Hello\nWorld',
    'Hello,World',
  ];

  const ValidLastNames = [
    'Kumar',
    'HelloWorld',
    'John Doe',
    'Mary-Jane',
    "It's a test",
    "A B-c D'e'f'G'",
  ];
  
  const InvalidLastNames = [
    'kumar3245',
    'abc123',
    '!@#$%^&*',
    'Hello World!',
    'user_name',
    '',
    'Hello\nWorld',
  ];

test('Email Regex works correctly with valid emails', () => {
    ValidEmails.forEach((email) => {
        expect(validEmail.test(email)).toBeTruthy();
        });
});
test('Email Regex works correctly with invalid emails', () => {
    InvalidEmails.forEach((email) => {
        expect(validEmail.test(email)).toBeFalsy();
        });
});

test('First Name Regex works correctly with valid first names', () => {
    validFirstNames.forEach((firstname) => {
        expect(validFirstName.test(firstname)).toBeTruthy();
        });
});
test('First Name Regex works correctly with invalid first names', () => {
    InvalidFirstNames.forEach((firstname) => {
        expect(validFirstName.test(firstname)).toBeFalsy();
        });
});

test('Last Name Regex works correctly with valid last names', () => {
    ValidLastNames.forEach((lastname) => {
        expect(validLastName.test(lastname)).toBeTruthy();
        });
});
test('Last Name Regex works correctly with invalid last names', () => {
    InvalidLastNames.forEach((lastname) => {
        expect(validLastName.test(lastname)).toBeFalsy();
        });
});
test('Password Regex works correctly with valid passwords', () => {
    ValidPasswords.forEach((password) => {
        expect(validPassword.test(password)).toBeTruthy();
        });
});
test('Password Regex works correctly with invalid passwords', () => {
    InvalidPasswords.forEach((password) => {
        console.log(password)
        expect(validPassword.test(password)).toBeFalsy();
        });
});