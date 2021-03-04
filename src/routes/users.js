const express = require('express');
const router = express.Router();



//Controllers
const UserController = require('../controllers/user.controllers');


//Obtengo todos los Usuarios
router.get('/getAll', (req,res) => {

  UserController.getAll(req,res);

});
//Creo un nuevo usuario
router.post('/createNew', (req,res) => {

  UserController.createNew(req,res);

});

//Login de usuario

router.post('/login', (req,res) => {
    
})




module.exports = router