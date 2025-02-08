import express from 'express';
import cors from 'cors';
import users from './routes/users.js';


const app = express();
app.use("/api/users",users)
app.use(cors());

app.get( '/', ( req, res ) => {
    res.send( 'Hello, World! backend working' );
})

app.listen( 3000, () => {
    console.log('Server is running on port 3000');
})

 