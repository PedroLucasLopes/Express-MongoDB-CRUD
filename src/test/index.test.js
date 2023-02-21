import request from 'supertest';
import app from '../app.js';

describe('Test of Products CRUD', () => {
    test('Test of CRUD GET properties', async () => {
        const res = await request(app).get('/products');
        expect(res.body[0]).toHaveProperty('name', 'description', 'price');
        expect(res.error).toBe(false);
        expect(res.status).toBe(200);
    })

    test('Test of CRUD POST a product', async () => {
        const product = {
            name: 'Frigideira Jest',
            description: 'Frigideira feita por teste automatizado',
            price: 100.00
        }
        const res = await request(app).post('/products').send(product);
        expect(res.error).toBe(false);
        expect(res.status).toBe(201);
    })
})