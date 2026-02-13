import twilio from 'twilio';


const sendOtp=async(phone , otp)=>{
    const client =twilio(process.env.TWILIO_SID,process.env.TWILIO_AUTH_TOKEN);
    console.log(process.env.TWILIO_SID)
    await client.messages.create({
        body:`Your otp is ${otp}`,
        from :process.env.TWILIO_PHONE,
        to:phone
    });
};

export default sendOtp;