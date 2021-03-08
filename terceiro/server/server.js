const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes')
mongoose.connect('mongodb+srv://joao:joao@cluster0-ziosp.mongodb.net/clinica?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
)
mongoose.connection.on('connected', () => 
      console.log(`Mongoose! conectado `)
   )

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3001, ()=> console.log("servidor rodando 3000"))