import express from 'express';
const router = express.Router();

import { registerCapitan } from '../controllers/auth/capitan.controller.js';

router.post('/register', registerCapitan);

export default router;
