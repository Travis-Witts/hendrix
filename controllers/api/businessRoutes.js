router.get('/search', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login')
        return
    }
    const dbProductData = await Business.findAll({
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
})