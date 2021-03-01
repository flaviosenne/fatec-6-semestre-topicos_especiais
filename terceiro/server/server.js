const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://joao:joao@cluster0-ziosp.mongodb.net/clinica?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
)
mongoose.connection.on('connected', () => 
      console.log(`Mongoose! conectado `)
   )


app.listen(3000, ()=> console.log("server running 3000"))