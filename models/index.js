const Business = require('./Business')
const Product = require('./Product');
const Reviews = require('./Reviews');
const User = require('./User');

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Product.hasMany(Reviews, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

Business.hasOne(Product,{
    foreignKey: 'business_id',
    onDelete: 'CASCADE'
});

Product.belongsTo(Business, {
    foreignKey: 'business_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'product_id'
});


module.exports = { User, Product, Reviews, Business };
