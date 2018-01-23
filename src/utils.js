export const makeNormalizeUsers = users => users.map(({
    location: { city, postcode, state, street },
    name: { first, last },
    picture: { thumbnail },
}) => ({
    city,
    name: `${first} ${last}`,
    postcode,
    state,
    street,
    thumbnail,
}));

export const makeFilteredUsers = (users, filter) => users.filter(({ name }) => name.match(filter));
