const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const businessRoutes = require('./businessRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/', homeRoutes);
router.use('/business', businessRoutes);
router.use('/review', reviewRoutes);

module.exports = router;