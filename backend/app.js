import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// Importing routes
import connectDb from './database/connectDb.js';
import userRouter from './routes/user.route.js';
import captainRouter from './routes/capitan.route.js';

export const app = express();

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});
app.use('/users', userRouter);
app.use('/captains', captainRouter);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    message:
      'Ohh you are lost, read the API documentation to find your way back home :)',
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
