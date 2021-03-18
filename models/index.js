const User = require('./User');
const Reviews = require('./Reviews');
const Product = require('./Product');

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});

Product.hasMany(Reviews, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

Product.belongsTo(User, {
    foreignKey: 'product_id'
});


module.exports = { User, Product, Reviews };
