const sequelize = require('../dbConnection');
const Sequelize = require('sequelize')



const User = sequelize.define('users', {
    userId: {type: Sequelize.SMALLINT, primaryKey: true},
    username: Sequelize.STRING,
    pass: Sequelize.STRING,
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
   })



   module.exports = User;