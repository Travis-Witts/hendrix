const router = require('express').Router();
const { Business, Reviews, User } = require('../models');
const sequelize = require('sequelize')

const withAuth = require('../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newReviewData = await User.create({
            review: req.body.review,
            rating: req.body.user_id,
            business_id: req.body.business_id,
        });
        res.status(200).redirect(`/business/${business_id}`);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;