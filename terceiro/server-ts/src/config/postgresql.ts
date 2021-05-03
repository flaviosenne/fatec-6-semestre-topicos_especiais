import { Pool} from 'pg'

export default new Pool({
    user: 'postgres',
    password: 'joao',
    host:'localhost',
    database: 'topicos',
    port: 5432
})