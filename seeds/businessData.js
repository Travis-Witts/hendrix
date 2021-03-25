const { Business } = require('../models');

const productData = [
    {
        name: 'Rent-A-Swag',
        description: 'A high quality rental store for your growing teenagers',
        imageUrl: " ",
        user_id: 1,
        category: "Clothing"
    },
    {
        name: 'Entertainment 720',
        description: 'The entertainment buisness here to cover all your entertaining needs',
        imageUrl: " ",
        user_id: 2,
        category: "Entertainment"
    },
    {
        name: 'Good Burger',
        description: 'Welcome to Good Burger, home of the good burger, can I take your order?',
        imageUrl: " ",
        user_id: 3,
        category: "Restaraunt"
    }
];

const seedProduct = () => Business.bulkCreate(productData);

module.exports = seedProduct;