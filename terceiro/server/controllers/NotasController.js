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
        console.log("id> ", req.params.id)
        notas.findByIdAndDelete({_id: req.params.id}).then(result => {
            res.status(204).json({msg: "removido"})
        })
    },

    async editar(req, res){
     
        const { nome, ra, displina, curso, p1, p2} = req.body
        console.log('estou aqui')
        notas.findByIdAndUpdate({_id: req.params.id, nome, ra, displina, curso, p1, p2}).then(result => {
            res.status(200).json({msg: "atualizado"})
        })
        console.log('deu certo')
    }
}