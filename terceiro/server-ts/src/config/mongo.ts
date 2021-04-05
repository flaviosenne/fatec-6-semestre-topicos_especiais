const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://joao:joao@cluster0-ziosp.mongodb.net/clinica?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
)
mongoose.connection.on('connected', () => 
      console.log(`Mongoose! conectado `)
   )
