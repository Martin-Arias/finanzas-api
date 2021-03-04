require('dotenv').config()


const express = require('express');
const app = express();
const morgan = require('morgan');



//middlewares
app.use(morgan('dev')); //Show Server requests
app.use(express.urlencoded({extended: false})) 
app.use(express.json());




//Routes
const itemsRouter = require('../src/routes/registros');
const usersRouter = require('../src/routes/users');

app.use('/api', itemsRouter);

app.use('/api/users', usersRouter);


//Server initialization
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`); //Delete this on prod
})




