const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Wichan',
        email: 'wichan@example.com',
        password: 'MyPass777!'
    }).expect(201)
})