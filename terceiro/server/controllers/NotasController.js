const notas = require('../models/Notas')

module.exports = {
    async insere(req, res){
        const nota = {ra, nome, disciplina, p1, p2, media , curso} = req.body

        await notas.create(nota)

        res.json(nota)
    },
    async busca(req, res){
        const notasDB = await notas.find()
        res.json(notasDB)
    },
    async buscaPorId(req, res){
        const notaDB = await notas.findById(req.params.id)
        res.json(notaDB)
    },

    async remove(req, res){
        notas.findByIdAndDelete(req.params.id).then(result => {
            res.status(400).json({msg: "removido"})
        })
    },

    async editar(req, res){
        const {ra, nome, disciplina, p1, p2, media , curso} = req.body

        notas.findByIdAndUpdate({_id: req.params.id, }, 
            {ra, nome, disciplina, p1, p2, media , curso}).then(result => {
            res.status(400).json({msg: "atualizado"})
        })
    }
}