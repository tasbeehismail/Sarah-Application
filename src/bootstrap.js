import express from 'express'; 
import dotenv from 'dotenv';
import connectDB from '../database/connection.js';
import errorHandler from './middleware/errorHandler.js';
import routes from '../src/index.routes.js'; 

const bootstrap = async (app) => {
    app.use(express.json());

    dotenv.config();
    
    await connectDB();

    app.use(routes);
    
    app.use(errorHandler);
};

export default bootstrap;