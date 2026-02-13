import React, { useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';
const VerifyOtpPage = () => {
     const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const verifyOtp=async ()=>{
        const response=await axios.post("http://localhost:2005/api/auth/verifyOtp",{
            phone , otp
            });
            console.log(response);
            alert("Login successfully")
    }
    
  return (
    <div>
        <NavBar/>
      <h1> Otp sent to the user Phone number check and verify </h1>
      
        <div>
            <label>Enter PhoneNumber </label>
            <input type='text' onChange={(e)=>setPhone(e.target.value)} required />
        </div>
        <div>
            <label>Enter OTP</label>
            <input type='text' onChange={(e)=>setOtp(e.target.value)} required />
        </div>
        
        <button onClick={verifyOtp} >Verify Otp</button>
     
    </div>
  )
}

export default VerifyOtpPage
