import User from '../models/user.model.js';

export const createUser = async ({ firstName, lastName, email, password }) => {
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  const token = user.generateAuthToken();

  return { user, token };
};
