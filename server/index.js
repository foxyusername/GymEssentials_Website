import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//Middleware to parse cookies
app.use(cookieParser());

//Middleware to allow other url requests
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));

//imported routes

import { registerRouter } from "./routes/registerRouter.js";


app.use('/authenticate',registerRouter);

app.listen(3000,()=>{console.log('listening on port 3000...')})