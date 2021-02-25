
//DDBB Conection
const sequelize = require('../database/dbConnection');



//Models import
const Registro = require('../database/models/registro.model')
const tipo_operacion = require('../database/models/tipoOperacion.model')

// Models asociations
tipo_operacion.hasMany(Registro, { foreignKey: 'id_tipo' })
Registro.belongsTo(tipo_operacion, { foreignKey: 'id_tipo' })



// TO DO Crear validaciones en las funciones de crear y update


module.exports = {

  getAll: (req, res) => {
    // sequelize.query(
    //     `SELECT idregistro,concepto,monto,createdAt,nombre AS tipo
    //     FROM registros
    //     JOIN tipo_operacion
    //     ON registros.id_tipo = tipo_operacion.id_operacion`
    // )
    Registro.findAll(
      {
        attributes: ['idregistro', 'concepto', 'monto', 'createdAt'],
        include: [{
          model: tipo_operacion,
          attributes: ['nombre']
        }]
      })
      .then(registros => {


        res.json(registros)


      })
      .catch(err => {
        res.json(err)
      })

  },

  getByCategory: (req, res) => {

    // //Arreglar Query

    // sequelize.query(
    //   `SELECT idregistro,concepto,monto,createdAt,nombre
    //   FROM registros
    //   JOIN tipo_operacion
    //   ON registros.id_tipo = tipo_operacion.id_operacion
    //   WHERE tipo_operacion.id_operacion = ${req.params.id}`
    // )

    Registro.findAll(
      {
        attributes: ['idregistro', 'concepto', 'monto', 'createdAt'],
        include: [{
          model: tipo_operacion,
          attributes: ['nombre'],
          where: {
            id_operacion: `${req.params.id}`
          }
        }]
      })

      .then(registros => {

        res.json(registros)
      })
      .catch(err => {
        console.log(err)
      })

  },


  createRegister: (req, res) => {
    Registro.create({
      concepto: req.body.concepto,
      monto: req.body.monto,
      id_tipo: req.body.id_tipo,

    })

      .then(registros => {

        res.json(registros)
      })

      .catch(err => {
        console.log(err)
      })

  },

  deleteRegister: (req, res) => {

    Registro.destroy({
      where: {
        idregistro: req.params.id
      }
    })
      .then(registros => {

        if (registros === 1) {
          res.json({
            Registro: req.params.id,
            Mensaje: 'Eliminado correctamente'
          })
        } else {
          res.json({
            Mensaje: 'No fue posible eliminar el registro'
          })
        }

      })

      .catch(err => {
        console.log(err)
      })

  },

  updateRegister: (req, res) => {

    const itemsToUpdate = req.body

    //Elimino el id_tipo para evitar que se modifique
    delete itemsToUpdate.id_tipo;

    Registro.update(itemsToUpdate, {
      returning: true, //Retorna un arreglo con el detalle de la fila/s modificada y la cantidad de filas modificadas

      where: {
        idregistro: req.body.idregistro
      }
    })
      .then(registros => {

        if (registros[1] === 1) {
          res.json({
            Registro: req.body.idregistro,
            Mensaje: 'Registro actualizado correctamente',
            
          })

        } else {
          res.json({
            Registro: req.body.idregistro,
            Mensaje: 'No pudo ser actualizado'
          })
        }

      })

      .catch(err => {
        console.log(err)
      })



  }


}



