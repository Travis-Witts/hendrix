const router = require('express').Router();
const { Product, Reviews } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbProductData = await Product.findAll({
            include: [
                {
                    model: Reviews,
                    attributes: ['review'],
                },
            ],
        });

        const products = dbProductData.map((product) =>
            product.get({ plain: true })
        );

        res.render('homepage', {
            products,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});