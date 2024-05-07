// services/userService.js

const User = require("../models/User");
const { hash } = require("bcryptjs");

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const createUser = async (userDetails) => {
  const { userName, email, phoneNumber, password } = userDetails;
  const user = await User.create({
    userName,
    email,
    phoneNumber,
    password,
  });
  return user;
};

const registerUser = async (userDetails) => {
  const existingUser = await findUserByEmail(userDetails.email);
  if (existingUser) {
    throw new Error("Email already exists");
  }
  return await createUser(userDetails);
};

const updateProfile = async (userId, userDetails) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.userName = userDetails.userName || user.userName;
  user.email = userDetails.email || user.email;
  user.phoneNumber = userDetails.phoneNumber || user.phoneNumber;

  return await user.save();
};

const resetPassword = async (email, newPassword) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  user.password = await hash(newPassword, 10);
  return await user.save();
};

module.exports = {
  findUserByEmail,
  registerUser,
  updateProfile,
  resetPassword,
};
