// routes/userRoutes.js

import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
} from '../controllers/auth/user.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

// Routes for user operations
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authUser, getUserProfile);

export default router;
