import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';

//Create express app with http
const app=express();
const server=http.createServer(app);//because socket.io support http

//Middleware
app.use(express.json({limit: "4mb"}));
app.use(cors());//it allow all the url to connect with backend

app.use("/api/status",(req,res)=>res.send("Server is live"));

//Connect to db
await connectDB();

const PORT =process.env.PORT || 5000;

server.listen(PORT,()=>console.log("Server is running on PORT:"+ PORT));
