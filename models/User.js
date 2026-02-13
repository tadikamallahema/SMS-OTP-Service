import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name :String,
    phone:{
        type: String , 
        unique :true
    },
    otp:String ,
    otpExpiry:Date
})

const user=mongoose.model('User',userSchema);
export default user;