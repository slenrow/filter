import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './common/Text';
import TitleText from './common/TitleText';
import Thumbnail from './common/Thumbnail';

const SectionWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    border: 1px solid #efefef;
    margin: 20px;
    width: 350px;
    max-width: 450px;
`;

const Metadata = styled.div`
    padding: 20px;
    flex-grow: 1;
`;

const propTypes = {
    city: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

const UserCard = ({ city, name, postcode, state, street, thumbnail }) => (
    <SectionWrapper>
        <Thumbnail src={thumbnail} />
        <Metadata>
            <TitleText>{name}</TitleText>
            <div>
                <Text>{street}</Text>
                <Text>{city}, {state}</Text>
                <Text>{postcode}</Text>
            </div>
        </Metadata>
    </SectionWrapper>
);

UserCard.propTypes = propTypes;

export default UserCard;
