const express = require('express');
const { getUsersHandler, getUsersByIdHandler } = require('../handlers/usersHandlers');

const router = express.Router();

//definir rutas para obtener usuarios
router.get('/', getUsersHandler);
router.get('/:id', getUsersByIdHandler);

module.exports= router;