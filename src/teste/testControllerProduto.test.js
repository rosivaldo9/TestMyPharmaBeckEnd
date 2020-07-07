
const produtoController = require('../controllers/marcarController')
const httpMocks = require("node-mocks-http"); // testa as rotas express
const newProduto = require('./produto.json');


let req, res, next;
beforeEach(()=>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("todo controller", ()=>{
    jest.useFakeTimers();

    beforeEach(()=>{
        req.body = newProduto;
    })

    it('testando model', async()=>{
        await  produtoController.insert(req, res, next);
        expect(res.statusCode).toBe(201); //chamando função simulada
    })

})