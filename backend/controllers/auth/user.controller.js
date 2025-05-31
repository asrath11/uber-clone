import User from '../../models/user.model.js';
import asyncHandler from '../../utilities/asyncHandler.js';
import { createUser } from '../../services/user.service.js';
import jwt from 'jsonwebtoken';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message:
        'Please provide all required fields: firstName, lastName, email, password',
    });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: 'User already exists with this email',
    });
  }

  const { user, token } = await createUser({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    password,
  });

  res
    .cookie('token', token, cookieOptions)
    .status(201)
    .json({
      status: 'success',
      user: {
        _id: user._id,
        email: user.email,
        firstName,
        lastName,
        fullName: user.fullName,
      },
    });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Please provide all required fields: email, password',
    });
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }

  const token = user.generateAuthToken();

  res
    .cookie('token', token, cookieOptions)
    .status(200)
    .json({
      status: 'success',
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({
    status: 'success',
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      isNewUser: user.isNewUser,
    },
  });
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const { firstName, lastName, password } = req.body;

  if (!firstName && !lastName && !password) {
    return res.status(400).json({
      message:
        'Please provide at least one field to update: firstName, lastName, or password',
    });
  }

  const user = await User.findById(req.user._id).select('+password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (firstName) user.firstName = firstName.trim();
  if (lastName) user.lastName = lastName.trim();
  if (password) user.password = password;
  user.isNewUser = false;

  await user.save(); // triggers pre-save hook to hash password

  res.status(200).json({
    status: 'success',
    user: {
      _id: user._id,
      email: user.email,
      firstName,
      lastName,
      fullName: user.fullName,
    },
  });
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
  });

  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully',
  });
});
