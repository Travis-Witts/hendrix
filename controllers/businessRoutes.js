const router = require('express').Router();
const { Business, Reviews, User } = require('../models');
const sequelize = require('sequelize')

const withAuth = require('../utils/auth');

router.get('/manageBusiness', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }
        const dbProductData = await Business.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });

        let businesses = dbProductData.map((product) => product.get({ plain: true }));

        res.render('manageBusiness', {
            businesses,
            loggedIn: req.session.loggedIn,

        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/search/:term', withAuth, async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
            return
        }
        const dbBusinessData = await Business.findAll({
            limit: 10,
            where: {
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.params.term + '%')
            },
            include: [
                {
                    model: Reviews,
                    required: true,
                    attributes: ['rating'],
                },
            ],
        });
        let businesses = dbBusinessData.map((business) => business.get({ plain: true }));

        businesses.forEach((business) => {
            let total = 0;
            let reviews = business.reviews
            for (i = 0; i < reviews.length; i++) {
                total += reviews[i].rating
            }
            let totalRating = Math.round(total)
            business.totalRating = totalRating / reviews.length
        })
        res.render('searchresult', {
            businesses,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/:id', withAuth, async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
            return
        }
        const dbBusinessData = await Business.findOne({
            where: {
                business_id: req.params.id
            },
            include: [
                {
                    model: Reviews,
                    required: true,
                    attributes: ['review', 'user_id', 'rating', 'business_id'],
                    include: ['reviewer'],
                },
                'owner',
            ],
        });

        let business = dbBusinessData.get({ plain: true });

        res.render('viewBusiness', {
            business,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;