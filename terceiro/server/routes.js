const express = require('express')

const routes = express.Router()

const Nota = require('./controllers/NotasController')

routes.get("/nota", Nota.busca)
routes.get("/nota/:id", Nota.buscaPorId)
routes.post("/nota", Nota.insere)
routes.put("/nota/:id", Nota.editar)
routes.delete("/nota/:id", Nota.remove)

module.exports = routes