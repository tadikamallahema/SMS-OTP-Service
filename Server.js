import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"
import dotenv from 'dotenv';
import cors from 'cors';

const app=express();
app.use(cors());
dotenv.config();

app.use(express.json()); // Middleware to parse JSON bodies
const MONGODB_URL='mongodb://localhost:27017/otp-practise';
const PORT=2005

const connectDB= async()=>{
    mongoose.connection.on('connected',()=>
        console.log("DB Connected "));

    await mongoose.connect(MONGODB_URL);
}
app.get('/',(req,res)=>{
    res.send("API is working fine");
})
app.use('/api/auth',authRoutes);
connectDB();
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
