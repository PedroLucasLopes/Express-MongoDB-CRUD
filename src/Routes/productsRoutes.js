import express from 'express';
import ProductController from '../controller/productsController.js';

const router = express.Router();

router
    .get('/products', ProductController.getProducts)
    .get('/products/:id', ProductController.getProductById)
    .post('/products', ProductController.postProduct)
    .put('/products/:id', ProductController.updateProduct)
    .delete('/products/:id', ProductController.deleteProduct)

export default router;