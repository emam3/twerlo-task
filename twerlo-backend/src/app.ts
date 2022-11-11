import dotenv from 'dotenv';
import express from 'express';
import wordsRoutes from '../routes/words.routes';
import { Request, Response, NextFunction } from 'express';
const app:any = express()
app.use(express.json())
dotenv.config()

// Add headers before the routes are defined
app.use((req:Request, res:Response, next:NextFunction):void => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 1);

    // Pass to next layer of middleware
    next();
});

app.use('/wordsRoutes', wordsRoutes)

export default app