const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedProduct = require('./productData');
const seedReview = require('./reviewData');
const seedBusiness = require('./businessData')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedBusiness();

    await seedProduct();

    await seedReview();

    process.exit(0);
};

seedAll();