import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter  from './routes/auth.route.js';
import listingRouter  from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path  from 'path';
dotenv.config();
const app = express();

app.use(express.json()); //it  allows to parse JSON objects in the request body
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
  }).catch((err) =>
   { 
    console.log(err);
});

const __dirname =path.resolve();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });
  
  app.use('/api/user', userRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/listing', listingRouter);

  // Serve static files if we are in production
  app.use(express.static(path.join(__dirname,'/client/dist')));
  // Handling any routes that don't match the ones above (Should be at the end)
  app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname,'client', 'dist','index.html'));//__dirname + '/views/index.html
  })
      
  //we create a middleware to handles error  if they are not caught by other middlewares or handlers
  app.use((err,req,res,next)=> {
    const statusCode =err.statusCode || 500;
    const message = err.message||'Internal server Error';
    return res.status(statusCode).json({
        success :false,
        statusCode,
        message,
    });
  });

