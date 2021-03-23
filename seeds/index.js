const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedBusiness = require('./businessData');
const seedReview = require('./reviewData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedBusiness();

    await seedReview();

    process.exit(0);
};

seedAll();