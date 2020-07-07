const mongoose = require('mongoose');
const Marca = mongoose.model('Marca');



module.exports = {
    //metodo salvar
    async insert(req, res) {
        const marca = await Marca.create(req.body);
        return res.json(marca);
    },
    //metodo listar
    async index(req, res) {
        var mar = [];
        const { page } = req.query;
        const marca = await Marca.paginate({}, { page, limit: 500 });
        return res.json(marca);
    },
    //metodo detalhes
    async detalhes(req, res) {
        const marca = await Marca.findById(req.params.id);
        return res.json(marca);
    },
    //metodo atualizar
    async atualizar(req, res) {
        const marca = await Marca.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(marca);
    },
    //metodo deletar
    async delete(req, res) {
        await Marca.findByIdAndRemove(req.params.id);
        return res.send();
    }



}