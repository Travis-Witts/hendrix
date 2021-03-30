const router = require('express').Router();
const { Business } = require('../../models');
const sequelize = require('sequelize')

const withAuth = require('../../utils/auth');


router.post('/', withAuth,  async (req, res) => {
    try {
        const newReviewData = await Business.create({
            name: req.body.name,
            description: req.body.description,
            user_id: req.session.user_id,
            category: req.body.category,
        });
        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedReview = await Business.destroy({
            where: {
                business_id: req.params.id,
            },
        });
        res.status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;