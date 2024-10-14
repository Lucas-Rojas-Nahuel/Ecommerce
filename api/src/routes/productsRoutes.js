const express = require('express');
const { getProductsHandler, getProductByIdHandler } = require('../handlers/productsHandlers');

const router = express.Router();

//definir rutas para obtener productos
router.get('/', getProductsHandler);
router.get('/:id', getProductByIdHandler);

module.exports = router;