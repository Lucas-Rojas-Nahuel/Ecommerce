const express = require('express');
const morgan = require('morgan');

const app = express();

//Middleware para parsear JSON y registrar solicitudes HTTP
app.use(express.json());
app.use(morgan('dev'));

// Importar rutas
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/usersRoutes');

//usar rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);

module.exports= app;