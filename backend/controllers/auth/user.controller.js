import User from '../../models/user.model.js';
import asyncHandler from '../../utilities/asyncHandler.js';
import { createUser } from '../../services/user.service.js';

export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const isUserAlreadyExist = await User.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: 'Capitan already exists with this email',
    });
  }
  // Basic input validation (optional: replace with Joi for better validation)
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message:
        'Please provide all required fields: firstName, lastName, email, password',
    });
  }

  // Call service to handle user creation logic
  const { user, token } = await createUser({
    firstName,
    lastName,
    email,
    password,
  });

  // Respond to client
  res.status(201).json({
    status: 'success',
    user,
    token,
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Basic input validation (optional: replace with Joi for better validation)
  if (!email || !password) {
    return res.status(400).json({
      message: 'Please provide all required fields: email, password',
    });
  }
  const user = await User.findOne({ email }).select('+password');
  // Check if user exists and password is correct
  if (!user) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }
  const token = user.generateAuthToken();
  res.status(200).json({
    status: 'success',
    token,
  });
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }
  res.status(200).json({
    status: 'success',
    user,
  });
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie('token'); // Clear the token cookie
  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully',
  });
});
