const { Product } = require('../models');

const productData = [
    {
        name: 'Rent-A-Swag',
        description: 'A high quality rental store for your growing teenagers',
        imageUrl: " ",
        business_id: 1
    },
    {
        name: 'Entertainment 720',
        description: 'The entertainment buisness here to cover all your entertaining needs',
        imageUrl: " ",
        business_id: 2
    },
    {
        name: 'Good Burger',
        description: 'Welcome to Good Burger, home of the good burger, can I take your order?',
        imageUrl: " ",
        business_id: 3
    }
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;