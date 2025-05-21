import asyncHandler from '../../utilities/asyncHandler.js';
import { createCapitan } from '../../services/capitan.service.js';
import Capitan from '../../models/captain.model.js';

export const registerCapitan = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
  } = req.body;
  const isCapitanAlreadyExist = await Capitan.findOne({ email });
  if (isCapitanAlreadyExist) {
    return res.status(400).json({
      message: 'Capitan already exists with this email',
    });
  }
  // Basic input validation (optional: replace with Joi for better validation)
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    return res.status(400).json({
      message:
        'Please provide all required fields: firstName, lastName, email, password, color, plate, capacity, vehicleType',
    });
  }

  // Call service to handle user creation logic
  const { capitan, token } = await createCapitan({
    firstName,
    lastName,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
  });

  // Respond to client
  res.status(201).json({
    status: 'success',
    capitan,
    token,
  });
});

export const loginCapitan = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Basic input validation (optional: replace with Joi for better validation)
  if (!email || !password) {
    return res.status(400).json({
      message: 'Please provide email and password',
    });
  }

  const capitan = await Capitan.findOne({ email }).select('+password');
  if (!capitan) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }
  // Check if password is correct
  const isPasswordCorrect = await capitan.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }

  // Respond to client
  res.status(200).json({
    status: 'success',
    capitan,
    token,
  });
});
