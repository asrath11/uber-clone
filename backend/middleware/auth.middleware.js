import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import asyncHandler from '../utilities/asyncHandler.js';
export const authUser = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(' ')[1]);
  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  const user = await User.findById(decoded.id);
  req.user = user;
  next();
});
