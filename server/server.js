import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userrouter from './router/auth.js';
import cookieParser from 'cookie-parser';

//--------------------- connecting to database---------------------------------------------
async function initServer(){
    const app = express()
    app.use(cors({
      origin: 'http://localhost:3000/'
  }))
    app.use(cookieParser())
    app.use(express.json());
    app.use('/public/uploads',express.static('public/uploads'));
    app.use('/', userrouter);
    dotenv.config();
    const PORT = process.env.PORT || 5000;
    try{
      await mongoose.connect(process.env.ATLAS_URI);
      console.log('connected to the mongodb at port {$PORT}')
  
    }catch(error){
      console.log(error);
    }
   /* const Middleware = (req,res,next)=>{
        next();
    }*/  
    app.listen(PORT,()=>
    console.log(`express server is running on the  port ${PORT}`))
  }

initServer()
