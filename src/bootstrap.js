import express from 'express'; 
import dotenv from 'dotenv';

const bootstrap = async (app) => {
    app.use(express.json());
    
    dotenv.config();
};

export default bootstrap;