import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Captain from '../models/captain.model.js';
import asyncHandler from '../utilities/asyncHandler.js';

const extractToken = (req) => {
  return (
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(' ')[1])
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const authUser = asyncHandler(async (req, res, next) => {
  const token = extractToken(req);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token' });
  }

  const decoded = verifyToken(token);
  const user = await User.findById(decoded.id);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized: User not found' });
  }

  req.user = user;
  next();
});

export const authCaptain = asyncHandler(async (req, res, next) => {
  const token = extractToken(req);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token' });
  }

  const decoded = verifyToken(token);
  const captain = await Captain.findById(decoded.id);
  if (!captain) {
    return res.status(401).json({ message: 'Unauthorized: Captain not found' });
  }

  req.captain = captain;
  next();
});
