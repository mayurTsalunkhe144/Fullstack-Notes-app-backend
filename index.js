import express from 'express';
import cors from 'cors';
import users from './routes/users.js';


const app = express();
app.use("/api/users",users)
app.use(cors());

  app.use(
    cors({
      origin: 'https://fullstack-notes-app-frontend.vercel.app', // Allow only this origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
      credentials: true, // Allow cookies and credentials
    })
  );

app.get( '/',( req, res ) => {
    res.json({
        message: 'Hello from server',
    });
})

app.listen( 3001, () => {
    console.log('Server is running on port 3001');
})

 