
const Booking = require('./booking');
const Housing = require('./housing'); 
const Notice = require('./notice');
const Role = require('./role');
const User = require('./user');
//const sequelize = require('../client'); 




// a Role has many User (n) => hasMany
// 1st argument: the model to link
// 2nd argument: configuration object
Role.hasMany(User, {
    // the foreign key that must be found in User
    foreignKey: 'role_id', 
    // the name we want to give to the users in role if we do a join
    as: 'users'
});

//a user has only one role(1) => belongsTo
User.belongsTo(Role, {
    // the foreign key that must be found in User
    foreignKey: 'role_id',
    // the name we want to give to the role in user if we do a join
    as: 'role'
});

User.hasMany(Notice, {
    foreignKey: 'user_id',

    as: 'notices'

});

Notice.belongsTo(User, {
    foreignKey: 'user_id',
    
    as: 'user'
});

Housing.hasMany(Notice, {
    foreignKey:'housing_id',
    
    as:'notices'
});

Notice.belongsTo(Housing, {
    foreignKey: 'housing_id',
    
    as: 'house'
});

Housing.hasMany(Booking, {
    foreignKey:'housing_id',
    
    as:'bookings'
});

Booking.belongsTo(Housing, {
    foreignKey: 'housing_id',
    
    as: 'house'
});

User.hasMany(Booking, {
    foreignKey: 'user_id',

    as: 'bookings'
});

Booking.belongsTo(User, {
    foreignKey: 'user_id',
    
    as: 'user'
});


module.exports = {
    Role,
    User,
    Booking,
    Housing,
    Notice
}