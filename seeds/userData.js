const { User } = require('../models');

const userData = [
    {
        name: 'Jimmy',
        email: 'jimmy@email.com',
        password: 'password123',
    },
    {
        name: 'Madeline',
        email: 'madeline@email.com',
        password: 'password123',
    },
    {
        name: 'Leslie',
        email: 'leslie@email.com',
        password: 'password123',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;