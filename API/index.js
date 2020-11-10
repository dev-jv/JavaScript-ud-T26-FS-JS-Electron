const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habliltar routing - middlewares express
app.use('/', routes())

// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})



