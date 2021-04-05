import express from 'express'
const app = express()

import './config/mongo'
import { route } from'./routes'

app.use(express.json())
app.use(route)

export  { app }
