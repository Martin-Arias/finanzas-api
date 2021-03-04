const sequelize = require('../dbConnection');
const Sequelize = require('sequelize')


const Registro = sequelize.define('registros', {
    idregistro: {type: Sequelize.SMALLINT, primaryKey: true},
    concepto: Sequelize.STRING,
    monto: Sequelize.STRING, 
    id_tipo: Sequelize.SMALLINT,
    id_usuario: Sequelize.SMALLINT,
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
  })


  module.exports = Registro;