import { Router} from 'express'
import { NotasController } from './controllers/NotasController'
const route = Router()
const notasController = new NotasController()

route.get('/', notasController.get)

export {route }