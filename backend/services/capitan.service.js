import Capitan from '../models/captain.model.js';

export const createCapitan = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  const capitan = await Capitan.create({
    firstName,
    lastName,
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });
  const token = capitan.generateAuthToken();
  return { capitan, token };
};
