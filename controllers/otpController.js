import User from '../models/User.js'
import mongoose from 'mongoose';
import sendOtp from '../utils/sendOtp.js';

const generateOtp=()=>{
    return Math.floor(10000+Math.random()*90000).toString();
};
export const sendTheOtp = async (req,res) => {
  const {name ,phone}=req.body;

  const otp=generateOtp();
  const otpExpiry=new Date(Date.now()+5*60*1000);

  let user=await User.findOne({phone});
  if(!user){
    user=new User({name,phone,otp,otpExpiry});
  }else{
    user.otp=otp;
    user.otpExpiry=otpExpiry;
  }
  await user.save();
  await sendOtp(phone,otp);
  res.json({message:"Otp Sent"})
};

export const verifyOtp= async (req,res)=>{
    const {phone ,otp}=req.body;
    const user=await User.findOne({phone});
    if(!user) return res.status(400).json({message:"User not found"});

    if(user.otp!==otp || user.otpExpiry<Date.now()){
        return res.status(400).json({message:"Invalid or OTP is expired "});
    }
    res.json({message:"Login Successfull"});
};