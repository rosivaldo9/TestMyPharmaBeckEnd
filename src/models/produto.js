const mongoose = require('mongoose');

const mogoPaginate = require("mongoose-paginate");

const ProdutoSchema = new mongoose.Schema({

    nome: {
        type: String
    },
    descricao: {
        type: String
    },
    preco: {
        type: Number
    },
    marca: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Marca'
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'
    }

})
const CategoriaSchema = new mongoose.Schema({

    nome: {
        type: String
    },
    descricao: {
        type: String
    },
})
const MarcaSchema = new mongoose.Schema({

    nome: {
        type: String
    }
})

ProdutoSchema.plugin(mogoPaginate);
CategoriaSchema.plugin(mogoPaginate);
MarcaSchema.plugin(mogoPaginate);

mongoose.model('Produto', ProdutoSchema);
mongoose.model('Categoria', CategoriaSchema);
mongoose.model('Marca', MarcaSchema);