const mongoose = require('mongoose')

module.exports = mongoose.model("notas", mongoose.Schema(new Schema({
    ra: {type: Number, required: true},
    nome: {type: String, required: true},
    curso: {type: String, required: true},
    disciplina: {type: String, required: true},
    p1: {type: Number, required: true},
    p2: {type: Number, required: true},
    media: {type: Number, required: true},
})))