import express from 'express';
import { sendTheOtp, verifyOtp } from '../controllers/otpController.js';



const router=express.Router();

router.post("/sendOtp",sendTheOtp);
router.post("/verifyOtp",verifyOtp);

export default router;