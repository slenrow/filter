import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserCard from './UserCard';
import Header from './common/Header';
import Input from './common/Input';

const UserDirectoryWrapper = styled.section`
    margin: 25px 0;
`;

const UserDirectoryHeader = styled.div`
    text-align: center;
`;

const UserList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const propTypes = {
    onChange: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string,
        name: PropTypes.string,
        postcode: PropTypes.string,
        state: PropTypes.string,
        street: PropTypes.string,
        thumbnail: PropTypes.string,
    })).isRequired,
}

const UserDirectory = ({ onChange, users }) => (
    <UserDirectoryWrapper>
        <UserDirectoryHeader>
            <Header>User Directory</Header>
            <Input onChange={onChange} placeholder="Filter users by name..." />
        </UserDirectoryHeader>
        <UserList>
            {users.map(user => <UserCard key={`user-card-${user.name}`} {...user} />)}
        </UserList>
    </UserDirectoryWrapper>
);

UserDirectory.propTypes = propTypes;

export default UserDirectory;
