import request from 'supertest';
import app from '../app.js';

test('Test of CRUD requisitions', async () => {
    const res = await request(app).get('/products');
    expect(res.body).toHaveProperty('name', 'description', 'price');
})