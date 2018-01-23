import React, { Component } from 'react';
import { makeFilteredUsers, makeNormalizeUsers } from './utils';
import UserDirectory from './UserDirectory';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: '',
      users: [],
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100').then(
      response => response.json()
    ).then(({ results: users }) => {
      this.setState(() => ({ users: makeNormalizeUsers(users) }));
    });
  }

  handleFilterChange(input) {
    this.setState(() => ({
      filter: input,
    }));
  }

  render() {
    const { filter, users } = this.state;
    const filteredUsers = makeFilteredUsers(users, filter);

    return (
      <div className="app">
        <UserDirectory
          onChange={e => this.handleFilterChange(e.target.value)}
          users={filteredUsers.length > 0 ? filteredUsers : users}
        />
      </div>
    );
  }
}
