import express from 'express';
const router = express.Router();

import {
  registerCapitan,
  loginCapitan,
} from '../controllers/auth/captian.controller.js';

router.post('/register', registerCapitan);
router.post('/login', loginCapitan);

export default router;
