
//DDBB Conection
const sequelize = require('../database/dbConnection');



//Models import
const Registro = require('../database/models/registro.model')
const tipo_operacion = require('../database/models/tipoOperacion.model')




module.exports = {

    getAll: (req,res) => {
        sequelize.query(
            `SELECT registros.idregistro, registros.concepto, registros.monto, registros.createdAt AS fecha, tipo_operacion.nombre AS tipo 
            FROM registros, tipo_operacion WHERE registros.id_tipo = tipo_operacion.id_operacion`
        )
          .then(registros => {
               
            res.json(registros)
           })
           .catch(err => {
             console.log(err)
           })
         
    },

    getByCategory: (req,res) => {
        
        //Arreglar Query
        
        sequelize.query(
            `SELECT registros.idregistro, registros.concepto, registros.monto, registros.createdAt AS fecha, tipo_operacion.nombre AS tipo 
            FROM registros, tipo_operacion WHERE ${req.params.id} = tipo_operacion.id_operacion`
        )
          .then(registros => {
               
            res.json(registros)
           })
           .catch(err => {
             console.log(err)
           })
    },


    createRegister : (req,res) => {
        Registro.create({ 
            concepto:req.body.concepto,
            monto:req.body.monto, 
            id_tipo:req.body.id_tipo,
            
          })
       
         .then(registros => {
              
           res.json(registros)
          })
       
          .catch(err => {
           console.log(err)
         })
       
    },

    deleteRegister : (req,res) => {
       
        res.json({
            Registro: req.params.id,
            Mensaje: 'Eliminado'
        })

    },

    updateRegister : (req,res) => {
      
    }


}



