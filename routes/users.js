import express from 'express';
import cors from 'cors';
const router= express.Router();



router.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the users route its working fine"
    });
}
)


export default router;