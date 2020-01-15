const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-buszl.mongodb.net/week10?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(express.json())

//Métodos HTTP: get, post, put, delete

//Tipos de Parâmetros:

//Query Parms: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params(Identificar recurso na alteração ou remoção)
//Body: request.body (Dados para a criação ou alteração de um registro)


app.use(routes)
app.listen(3333)