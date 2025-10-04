const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('mongo-sanitize');
const hpp = require('hpp');
const connectDB = require('./src/config/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB();

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173/',
  credentials: true
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(hpp());
app.use((req, res, next) => {
  req.body = mongoSanitize(req.body);
  req.query = mongoSanitize(req.query);
  req.params = mongoSanitize(req.params);
  next();
});

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.'
});
app.use(globalLimiter);

// Routes
app.use('/api/events', require('./src/routes/eventRoutes'));
app.use('/api/registrations', require('./src/routes/registrationRoutes'));
app.use('/api/auth', require('./src/routes/userRoutes'));
app.use('/api/auth/admin', require('./src/routes/adminSetup')); // New admin routes
app.use('/api/admin', require('./src/routes/adminRoutes')); // New admin routes

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
