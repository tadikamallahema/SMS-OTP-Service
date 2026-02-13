import React, { useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';
const SignUp = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");

    const sendOtp= async (e)=>{
      e.preventDefault();
      try{
        const res=await axios.post("http://localhost:2005/api/auth/sendOtp",{
            name,
            phone
        });
        console.log(res.data);
        alert("Otp Sent");
      }catch(err){
        console.log(err);
      }
    }
  return (
    <div>
        <NavBar/>
      <h1> I am in SignUp Page </h1>
      <form >
        <div>
            <label>Enter your Name</label>
            <input type='text' onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div>
            <label>Enter your phoneNumber</label>
            <input type='text'minLength={13} onChange={(e)=>setPhone(e.target.value)} required />
        </div>
        
        <button onClick={sendOtp} >Submit</button>
      </form>
    </div>
  )
}

export default SignUp
