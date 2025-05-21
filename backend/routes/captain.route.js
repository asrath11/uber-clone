import express from 'express';
const router = express.Router();

import {
  registerCapitan,
  loginCapitan,
  getCapitanProfile,
} from '../controllers/auth/captian.controller.js';

import { authCaptain } from '../middleware/auth.middleware.js';

router.post('/register', registerCapitan);
router.post('/login', loginCapitan);
router.get('/profile', authCaptain, getCapitanProfile);

export default router;
