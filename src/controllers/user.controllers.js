
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../database/models/User.model')



module.exports = {

    getAll: (req,res) => {
        User.findAll()
        .then(users => {


            res.json(users)
    
    
          })
          .catch(err => {
            res.json(err)
          })
    } ,

    createNew: (req,res) => {
        bcrypt.hash(req.body.pass, saltRounds, (err, hash) =>{
            
        
        User.create({
            username: req.body.username,
            pass: hash
        })
        .then(users => {


            res.json(users)
    
    
          })
          .catch(err => {
            res.json(err)
          })

        })
        
    } ,

    loginUser: (req,res) => {

    }

}