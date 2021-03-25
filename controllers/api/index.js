const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const businessRoutes = require('./businessApiRoutes');

router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/business', businessRoutes);

module.exports = router;