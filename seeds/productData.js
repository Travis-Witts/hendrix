const { Product } = require('../models');

const productData = [
    {
        name: 'Rent-A-Swag',
        description: 'A high quality rental store for your growing teenagers',
        imageUrl: " "
    },
    {
        name: 'Entertainment 720',
        description: 'The entertainment buisness here to cover all your entertaining needs',
        imageUrl: " "
    },
    {
        name: 'Good Burger',
        description: 'Welcome to Good Burger, home of the good burger, can I take your order?',
        imageUrl: " "
    }
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;