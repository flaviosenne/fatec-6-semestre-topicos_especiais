import { Router} from 'express'
import { NotasController } from './controllers/NotasController'
const route = Router()
const notasController = new NotasController()

route.get('/nota', notasController.get)
route.get('/nota/:id', notasController.getById)
route.post('/nota', notasController.save)
route.put('/nota/:id', notasController.update)
route.delete('/nota/:id', notasController.remove)

export {route }