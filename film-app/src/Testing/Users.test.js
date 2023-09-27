import React from 'react';
import {User,Users} from '../Components/Users';

describe('User and Users Classes', () => {
  let users;

  beforeEach(() => {

    users = new Users();

  });

  it('should create a new User instance', () => {

    const user = new User('John Doe', 'john@example.com', 'password');

    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
    expect(user.password).toBe('password');

  });

  it('should add a user to the Users list', () => {
    const user = new User('John Doe', 'john@example.com', 'password');

    users.addUser(user);

    expect(users.listOfUsers).toContain(user);
  });
  
  it('should find a user by email', () => {
    const user1 = new User('John Doe', 'john@example.com', 'password');
    const user2 = new User('Jane Doe', 'jane@example.com', 'password');

    users.addUser(user1);
    users.addUser(user2);
    
    const foundUser = users.findUser('jane@example.com');

    expect(foundUser).toBe(user2);
  });
  
  it('should return null when a user is not found by email', () => {
    const user = new User('John Doe', 'john@example.com', 'password');

    users.addUser(user);
    
    const foundUser = users.findUser('nonexistent@example.com');

    expect(foundUser).toBeNull();
  });

  it('should find a user in a list of users', () => {
    for (let i = 1; i <= 10; i++) {
        const name = `User ${i}`;
        const email = `user${i}@example.com`;
        const password = `password${i}`;
      
        users.addUser(new User(name, email, password));

    }
    const foundUser = users.findUser('user5@example.com');
    
    expect(foundUser).not.toBeNull();
    expect(foundUser.name).toBe('User 5');
    expect(foundUser.email).toBe('user5@example.com');
    expect(foundUser.password).toBe('password5');
  });

});
