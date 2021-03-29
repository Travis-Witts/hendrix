const router = require('express').Router();
const { Business, Reviews, User } = require('../../models');
const sequelize = require('sequelize')

const withAuth = require('../../utils/auth');

router.post('/:id', withAuth,  async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
            return
        }
        const newReviewData = await Reviews.create({
            review: req.body.comment,
            rating: req.body.starRating,
            user_id: req.session.user_id,
            business_id: req.params.id,
        });
        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
            return
        }
        const deletedReview = await Reviews.destroy({
            where: {
                review_id: req.params.id,
            },
        });
        console.log(deletedReview);
        res.status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


module.exports = router;