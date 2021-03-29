import * as express from 'express'
const app = express()

import { route } from'./routes'

app.use(route)
app.use(express.json())

export  { app }
