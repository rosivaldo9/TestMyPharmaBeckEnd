const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    email: {
        type: String,

    },
    password: {
        type: String
    },
})

module.exports= user= mongoose.model('Usuario', UserSchema);

