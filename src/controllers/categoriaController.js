const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');



module.exports = {
    //metodo salvar
    async insert(req, res) {
        const categoria = await Categoria.create(req.body);
        return res.json(categoria);
    },
    //metodo listar
    async index(req, res) {
        const { page } = req.query;
        const categoria = await Categoria.paginate({}, { page, limit: 500 });
        return res.json(categoria);
    },
    //metodo detalhes
    async detalhes(req, res) {
        const categoria = await Categoria.findById(req.params.id);
        return res.json(categoria);
    },
    //metodo atualizar
    async atualizar(req, res) {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(categoria);
    },
    //metodo deletar
    async delete(req, res) {
        await Categoria.findByIdAndRemove(req.params.id);
        return res.send();
    }



}