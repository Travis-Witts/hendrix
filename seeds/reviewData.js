const { Reviews } = require('../models');

const reviewData = [
    {
        review: 'Best steak in town!!',
        user_id: 1,
        rating: 5,
        business_id: 1,
    },
    {
        review: 'Great service, will come again',
        user_id: 2,
        rating: 1,
        business_id: 2,
    },
    {
        review: 'Gorgeous sea view and a gorgeous feed, cant go wrong!',
        user_id: 3,
        rating: 3,
        business_id: 3,
    },
];

const seedReview = () => Reviews.bulkCreate(reviewData);

module.exports = seedReview;