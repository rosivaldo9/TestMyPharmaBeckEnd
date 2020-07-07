const request = require('supertest');
const app = require("../../index");
const newTodo = require('./produto.json')

const endpointUrl = "sistema/produto";

describe('endpointUrl', ()=>{
    jest.useFakeTimers();
    it("POST" + endpointUrl, async ()=>{
        const response = await request(app)
        .post(endpointUrl)
        .send(newTodo);
        expect(response.statusCode).toBe(201);
     //   expect(response.body.title).toBe(newTodo.title);


    });
});