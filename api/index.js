import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import userVerification from './middlewares/AuthMiddleware.js';

dotenv.config();

import authRoutes from "./routes/auth.js"
import projectRoutes from "./routes/project.js"

const app = express();


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('connected to db');
    }catch(err){
        console.log(err);
        throw err;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
})

mongoose.connection.on('connected', () => {
    console.log('Database connected');
})

app.use(cookieParser());
app.use(cors({
    origin: 'doubledepth.org',
    credentials: true,
  }));

  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.doubledepth.org');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200); // Respond with 200 OK for preflight requests
    } else {
      next();
    }
  });

app.use(authRoutes);
app.use('/admin', userVerification, projectRoutes);

app.listen(8081, () => {
    connect();
    console.log('Server is running on port 8081');
})