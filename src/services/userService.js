import UserModel from '../models/users';

export const getAllUsers = async () => {
  return UserModel.find();
};

export const createUser = async user => {
  return UserModel.create(user);
};

export const getUserById = async id => {
  return UserModel.findById(id);
};

export const getUserByEmailPassword = async (email, password) => {
  return UserModel.findOne({ email: email });
};

export const getUserByExternalId = async externalId => {
  return UserModel.findOne({ externalId: externalId });
};

export const updateUser = async (id, blog) => {
  return UserModel.findByIdAndUpdate(id, blog);
};

export const deleteUser = async id => {
  return UserModel.findByIdAndDelete(id);
};
