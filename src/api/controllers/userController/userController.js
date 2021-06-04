const User = require('../../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json({ data: allUsers });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const createdUser = await User.create({
      ...req.body,
      createdAt: Date.now(),
      updatedAt: null,
    });

    res.status(200).json({
      data: createdUser,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = { ...req.body, updatedAt: Date.now() };
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json({
      data: updatedUser,
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
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
