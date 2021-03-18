const { Product } = require('../models');

const productData = [
    {
        name: 'Rent-A-Swag',
        description: 'A high quality rental store for your growing teenagers',
        image: link
    },
    {
        name: 'Entertainment 720',
        description: 'The entertainment buisness here to cover all your entertaining needs',
        image: link
    },
    {
        name: 'Good Burger',
        description: 'Welcome to Good Burger, home of the good burger, can I take your order?',
        image: link
    }
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;