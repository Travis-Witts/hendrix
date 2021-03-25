const router = require('express').Router();
const { Business, Reviews, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // if (!req.session.logged_in) {
        //     res.redirect('/login');
        //     return;
        // }
        const dbProductData = await Business.findAll();

        let products = dbProductData.map((product) => product.get({ plain: true }));
        if (products.length < 5) {
            var ArrLength = products.length;
        }
        else {
            var ArrLength = 5
        }
        const randomArr = []

        for (i = 0; i < ArrLength ; i++) {
                index = Math.floor(Math.random() * products.length);
                randomArr.push(products[index])
                products = products.filter((val, i) => i!= index)
        }
        console.log(randomArr)

        res.render('homepage', {
            randomArr,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/register', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('register');
});

module.exports = router;