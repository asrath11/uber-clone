import express from 'express';
const router = express.Router();

import {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
} from '../controllers/auth/captain.controller.js';

import { authCaptain } from '../middleware/auth.middleware.js';

router.post('/register', registerCaptain);
router.post('/login', loginCaptain);
router.get('/profile', authCaptain, getCaptainProfile);

export default router;
