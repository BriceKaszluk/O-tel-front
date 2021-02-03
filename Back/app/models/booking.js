// we import our sequelize client
const sequelize = require('../client'); 

// we add the classes of the package we need
const {DataTypes, Model} = require('sequelize');

class Booking extends Model {};


// we use the static init method inherited from Model to configure our model
Booking.init (
    // 1st argument: an object which describes the fields of the table
    // No need to indicate the id field, Sequelize adds it automatically
    {
        // we define fields by indicating their names and types
        begining_date: DataTypes.DATEONLY,
        ending_date: DataTypes.DATEONLY, 
        housing_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER
    }, 
   // 2nd argument: an object with connection info
    {

        // instance of client sequelize
        sequelize,
        // we indicate the name of the table in the DB
        tableName: 'booking'
    }
);

// don't forget to export 
module.exports = Booking; 