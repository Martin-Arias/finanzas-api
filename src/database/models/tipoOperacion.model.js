const sequelize = require('../dbConnection');
const Sequelize = require('sequelize')



const tipo_operacion = sequelize.define('tipo_operacion', {
    id_operacion: {type: Sequelize.SMALLINT, primaryKey: true},
    nombre: Sequelize.STRING
   },
   {
    timestamps: false,
    freezeTableName: true
   })



   module.exports = tipo_operacion;