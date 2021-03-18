const { Review } = require('../models');

const reviewData = [
    {
        review: 'Best steak in town!!',
        user_id: 1,
        product_id: 1
    },
    {
        review: 'Great service, will come again',
        user_id: 2,
        product_id: 2
    },
    {
        review: 'Gorgeous sea view and a gorgeous feed, cant go wrong!',
        user_id: 3,
        product_id: 3
    },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;