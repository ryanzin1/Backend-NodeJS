const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.get('/users',UserController.index)
routes.post('/users',UserController.store)//get = leitura   post = inserção

module.exports = routes;