const router = require('express').Router();
const { Business, Reviews } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbProductData = await Business.findAll({
            include: [
                {
                    model: Reviews,
                    required: true,
                    attributes: ['review', 'user_id', 'business_id'],
                },
            ],
        });
        const products = dbProductData.map((product) =>
            product.get({ plain: true })
        );
        // res.json(products)
        // console.log(products)
        // for (i = 0; i < products.length; i++) {
        //     products[i].username = await (products) => {}
        // }

        res.render('homepage', {
            products,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;