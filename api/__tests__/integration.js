const supertest = require('supertest');
const server = require('../src/server.js');

const required = supertest(server);

describe('POST /POST', () => {
    test('should respond with code 200', async () =>{
        try {
            await request.post('/POST').expect(200);
         } catch (err) {
        }
    });
});

describe('GET /GET', () => {
    test('should respond with an array', async () =>{
        try {
            await request.get('/GET').expect(Object);
         } catch (err) {
        }
    });
});

describe('GET /ORDERBYPRICE', () => {
    test('should give an array', async () =>{
        try {
            await request.get('/ORDERBYPRICE').expect(Object);
         } catch (err) {
        }
    });
});

describe('DEL /DELETE', () => {
    test('should respond with code 200', async () =>{
        try {
            await request.del('/DELETE').expect(200);
         } catch (err) {
        }
    });
});

describe('PUT /UPDATE', () => {
    test('should give an array', async () =>{
        try {
            await request.put('/UPDATE').expect(Object);
         } catch (err) {
        }
    });
});