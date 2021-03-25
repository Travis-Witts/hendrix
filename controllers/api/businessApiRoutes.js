const router = require('express').Router();
const { Business } = require('../../models');
const sequelize = require('sequelize')

const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
    try {
        // if (!req.session.loggedIn) {
        //     res.redirect('/login')
        //     return
        // }
        const newReviewData = await Business.create({
            name: req.body.name,
            description: req.body.description,
            image_url: req.body.image_url,
            user_id: req.session.user_id,
        });
        res.status(200).redirect(`/business/managebusiness/${req.session.user_id}`);
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        // if (!req.session.loggedIn) {
        //     res.redirect('/login')
        //     return
        // }
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