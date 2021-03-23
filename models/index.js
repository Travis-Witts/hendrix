const Business = require('./Business');
const Reviews = require('./Reviews');
const User = require('./User');

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Business.hasMany(Reviews, {
    foreignKey: 'business_id',
    onDelete: 'CASCADE'
});

User.hasMany(Business,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Business.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'owner'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'reviewer'
});

Reviews.belongsTo(Business, {
    foreignKey: 'business_id'
});


module.exports = { User, Business, Reviews };
