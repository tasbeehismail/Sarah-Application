import express from 'express'; 
import dotenv from 'dotenv';
import connectDB from '../database/connection.js';

const bootstrap = async (app) => {
    app.use(express.json());
    
    dotenv.config();

    await connectDB();
};

export default bootstrap;