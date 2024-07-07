import express from 'express' 
import bootstrap from './src/bootstrap.js'; 

const app = express();
bootstrap(app)  

const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${port}`))  
