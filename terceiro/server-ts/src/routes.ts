import { Router} from 'express'
import { NotasController } from './controllers/NotasController'
import { ClientControllerSQL } from './controllersSQL/ClientsController'
const route = Router()
const notasController = new NotasController()
const clientControllerSQL = new ClientControllerSQL()

route.get('/nota', notasController.get)
route.get('/nota/:id', notasController.getById)
route.post('/nota', notasController.save)
route.put('/nota/:id', notasController.update)
route.delete('/nota/:id', notasController.remove)

route.get('/client', clientControllerSQL.get)
route.post('/client', clientControllerSQL.save)

export {route }