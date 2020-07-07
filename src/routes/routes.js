const express = require('express');
const routes = express.Router();
const cors = require("cors");
routes.use(cors())

//import das controllers
const usuarioController = require('../controllers/usuarioController');
const categoriaController = require('../controllers/categoriaController');
const marcaController = require('../controllers/marcarController');
const produtoController = require('../controllers/produtoController');


//rotas do produto
routes.post('/produto', produtoController.insert);
routes.get('/produtos', produtoController.index);
routes.get('/produto/:id', produtoController.detalhes);
routes.put('/produto/:id', produtoController.atualizar)
routes.delete('/produto/:id', produtoController.delete);

//rotas do usuarios
routes.post('/register', usuarioController.insert);
routes.post('/login', usuarioController.login);
routes.get('/profile', usuarioController.profile);

//rotas da Marca
routes.post('/marca', marcaController.insert);
routes.get('/marcas', marcaController.index);
routes.get('/marca/:id', marcaController.detalhes);
routes.put('/marca/:id', marcaController.atualizar)
routes.delete('/marca/:id', marcaController.delete);

//rotas da categoria
routes.post('/categoria', categoriaController.insert);
routes.get('/categorias', categoriaController.index);
routes.get('/categoria/:id', categoriaController.detalhes);
routes.put('/categoria/:id', categoriaController.atualizar)
routes.delete('/categoria/:id', categoriaController.delete);



module.exports= routes;