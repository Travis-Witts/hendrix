const router = require('express').Router();
const { Business, Reviews, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }
        const dbProductData = await Business.findAll();

        let products = dbProductData.map((product) => product.get({ plain: true }));
        if (products.length < 5) {
            var ArrLength = products.length;
        }
        else {
            var ArrLength = 5
        }
        const randomArr = []

        for (i = 0; i < ArrLength; i++) {
            index = Math.floor(Math.random() * products.length);
            randomArr.push(products[index])
            products = products.filter((val, i) => i != index)
        }

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

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

// rendering chat room 
router.get('/chatroom', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user_id: 1,
            }
        });

        let user = userData.get({ plain: true });

        res.sendFile('C:/Users/MEDIA/documents/bootcamp/uadel-adel-fsf-pt-11-2020-u-c/week_15/02-Homework/review-web/views/chatroom.html', {
            user,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;