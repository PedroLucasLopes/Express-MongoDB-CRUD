import express from 'express';
import productsRoutes from './productsRoutes.js';

const routes = (app) => {
    // Defining use routes to Express, converting to Json
    app.use(
        express.json(),
        productsRoutes
    )
}

export default routes;