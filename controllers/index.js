const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const businessRoutes = require('./businessRoutes');

router.use('/api', apiRoutes)
router.use('/', homeRoutes);
router.use('/business', businessRoutes);


module.exports = router;