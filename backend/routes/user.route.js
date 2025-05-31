// routes/userRoutes.js

import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
} from '../controllers/auth/user.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

// Routes for user operations
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authUser, getUserProfile);
router.post('/updateUser', authUser, updateUserProfile);
router.post('/logout', logoutUser);

export default router;
