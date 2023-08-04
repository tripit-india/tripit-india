import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import bookingRoute from './routes/bookings.js';
import internationaltourRoute from './routes/internationalTour.js';
import customTourRequestRoute from './routes/customTourRequest.js';
import internityRoute from './routes/Internity.js';
import BlogRoutes from './routes/Blog.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/internationalTour', internationaltourRoute);
app.use('/api/v1/', customTourRequestRoute);
app.use('/api/v1/Internity', internityRoute);
app.use('/api/v1/', BlogRoutes);

// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected');
  } catch (err) {
    console.error('MongoDB database connection failed');
    process.exit(1); // Exit the application with a non-zero status code to indicate failure
  }
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  connect();
  console.log('Server listening on port', port);
});
