
const express = require('express');
const router = express.Router();



//Controllers

const RegisterController = require('../controllers/register.controllers');




//Obtengo todos los registros 
router.get('/getAll', (req,res) => {
  
    RegisterController.getAll(req,res);

});

//Obtengo los registros por id
router.get('/getByCategory/:id', (req,res) => {
  
    RegisterController.getByCategory(req,res);

});

//Creo un nuevo registro
router.post('/newRegister', (req, res) => {

    RegisterController.createRegister(req,res);
  
});
//Creo un nuevo registro
router.delete('/:id', (req, res) => {

    RegisterController.deleteRegister(req,res)
  
});






module.exports = router;