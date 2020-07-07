const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');
const Categoria = mongoose.model('Categoria');
const Marca = mongoose.model('Marca');



module.exports = {
    //metodo salvar
    async insert (req, res){
        await  Categoria.findOne({nome: req.body.categoria}).then(produtos =>{ 
            Marca.findOne({nome :req.body.marca}).then(marca=>{
                const produt ={
                    nome: req.body.nome,
                    descricao: req.body.descricao,
                    preco : req.body.preco,
                    categoria: produtos._id,
                    marca: marca._id
                }
              const produto =  Produto.create(produt);
                return res.json(produto ).status(201);
            })
        });
    },
    //metodo listar
    async index (req, res){
        const {page} = req.query;
        const  produto  = await Produto.paginate({}, {page, limit: 500});
        return res.json( produto );
    },
    //metodo detalhes
    async detalhes (req, res){
        const  produto =await Produto.findById(req.params.id);
        return res.json( produto );
    },
    //metodo atualizar
    async atualizar(req, res){
        const  produto  = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json( produto );
    },
    //metodo deletar
    async delete (req, res){
     await Produto.findByIdAndRemove(req.params.id);
     return res.send();
        }
    
        

}