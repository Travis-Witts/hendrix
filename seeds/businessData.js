const { Business } = require('../models');

const businessData = [
    {
        name: 'rentingswag',
        email: 'swag@email.com',
        password: 'password123',
    },
    {
        name: 'aziz',
        email: 'aziz@email.com',
        password: 'password123',
    },
    {
        name: 'burger',
        email: 'burger@email.com',
        password: 'password123',
    },
];

const seedUser = () => Business.bulkCreate(businessData);

module.exports = seedUser;