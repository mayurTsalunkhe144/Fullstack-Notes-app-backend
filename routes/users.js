import express from 'express';
import cors from 'cors';
const router= express.Router();

router.use(
    cors({
      origin: 'https://fullstack-notes-app-frontend.vercel.app', // Allow only this origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
      credentials: true, // Allow cookies and credentials
    })
  );

router.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the users route its working fine cors updated"
    });
}
)


export default router;