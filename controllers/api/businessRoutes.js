const router = require('express').Router();
const { Business, Reviews, User } = require('../../models');

const withAuth = require('../../utils/auth');


router.get('/search/:term', async (req, res) => {
    try {
        // if (!req.session.loggedIn) {
        //     res.redirect('/login')
        //     return
        // }
        const dbBusinessData = await Business.findAll({
            where: {
                name: req.params.term
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
        console.log(businesses)
        businesses.forEach((business) => {
            let totalRating = 0;
            
        })

        var totalRating = 0;
        for (var i = 0; i < .length; i++) {
            total += [i];
        }
        var avg = total / business.length;
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login')
            return
        }
        const dbProductData = await Business.findOne({
            where: {
                business_id: req.params.id
            },
            include: [
                {
                    model: Reviews,
                    required: true,
                    attributes: ['review', 'user_id', 'rating', 'business_id'],
                    include: [{
                        model: User,
                        required: true,
                        attributes: ['name']
                    }],
                },
            ],
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;