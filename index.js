const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();//gerenciador de rotas
app.use(express.json());//gerenciando rotas em formato Json
app.use(bodyParser.urlencoded({extended: true}));//configurado para analisar dados no formato json da url
app.use(bodyParser.json())//configurado para analisar dados no formato json
app.use(cors());

//conexão com banco de dados
mongoose.connect("mongodb+srv://souza:2804tania@cluster0.oq0qb.mongodb.net/MyPharma?retryWrites=true&w=majority", {useNewUrlParser:true});

//centraliza os models nessa pasta
requireDir('./src/models');

//rotas
app.use('/sistema', require('./src/routes/routes'));

//porta
app.listen(process.env.PORT || 5000);
