const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Import routes
const projectRoutes = require('./routes/projects');
const authRoutes = require('./routes/auth');

// Import models
const User = require('./models/User');
const Project = require('./models/Project');

// Initialize express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running!', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

// Connect to MongoDB only if MONGODB_URI is provided
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI, {
    // Removed deprecated options
  })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Create default admin user if it doesn't exist
    User.findOne({ username: 'admin' }).then(user => {
      if (!user) {
        User.create({
          username: 'admin',
          email: 'admin@example.com',
          password: 'password'
        }).then(() => {
          console.log('Default admin user created');
        }).catch(err => {
          console.log('Error creating default admin user:', err.message);
        });
      }
    });
    
    // Create sample projects if none exist
    Project.countDocuments().then(count => {
      if (count === 0) {
        // No sample projects will be created - start with a clean slate
        console.log('Starting with a clean projects database. Add your projects through the admin panel.');
      }
      // Remove OSCode website if it exists (one-time cleanup)
      Project.deleteMany({ title: { $regex: /oscode/i } })
        .then(result => {
          if (result.deletedCount > 0) {
            console.log(`Removed ${result.deletedCount} OSCode project(s)`);
          }
        })
        .catch(err => {
          console.log('Error removing OSCode projects:', err.message);
        });
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    console.log('Server will continue running without database connection');
  });
} else {
  console.log('MONGODB_URI not provided. Starting server without database connection.');
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});