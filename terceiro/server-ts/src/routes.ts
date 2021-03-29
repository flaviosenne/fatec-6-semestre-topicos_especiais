import { Router} from 'express'
import { Funcionario } from './controllers/Funcionario'
const route = Router()
const funcionarioCoontroller = new Funcionario()

route.get('/', funcionarioCoontroller.get)

export {route }