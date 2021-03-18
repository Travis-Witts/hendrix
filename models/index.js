const Owner = require('./Owner')
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

Owner.hasMany(Business,{
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Business.belongsTo(Owner, {
    foreignKey: 'owner_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});

Reviews.belongsTo(Business, {
    foreignKey: 'business_id'
});


module.exports = { User, Business, Reviews, Owner };
