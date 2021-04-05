import express from 'express'
import cors from 'cors'
const app = express()

import './config/mongo'
import { route } from'./routes'

app.use(cors())
app.use(express.json())
app.use(route)

export  { app }
