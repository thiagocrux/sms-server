const User = require('../../models/User');
const moment = require('moment');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json({ users: allUsers });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const currentDateTime = moment().utc(-03).format();

    const createdUser = await User.create({
      ...req.body,
      createdAt: currentDateTime,
      updatedAt: null,
    });

    res.status(200).json({
      user: createdUser,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.userID;
    const currentDateTime = moment().utc(-03).format();
    const updates = { ...req.body, updatedAt: Date.now() };
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(200).json({
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      user: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
