
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
//Elimino un registro
router.delete('/delete/:id', (req, res) => {

    RegisterController.deleteRegister(req,res);
  
});

//Actualizo un registro

router.put('/update', (req,res) => {

    RegisterController.updateRegister(req,res);
})






module.exports = router;