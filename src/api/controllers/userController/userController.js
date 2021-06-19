const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    return user.length < 1
      ? res.status(401).json({ message: 'Auth failed' })
      : bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err)
            return res.status(401).json({
              message: 'Auth failed',
            });
          if (result) {
            const token = jwt.sign(
              {
                email: user.email,
                userID: user._id,
              },
              process.env.TOKEN_SECRET,
              {
                expiresIn: '12h',
              }
            );
            return res.status(201).json({
              message: 'Auth succesfull',
              token,
            });
          } else {
            return res.status(401).json({
              message: 'Auth failed',
            });
          }
        });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: 'Login failed' });
  }
};

exports.register = async (req, res) => {
  const currentDateTime = moment().utc(-03).format();

  try {
    const user = await User.find({ email: req.body.email });
    return user.length >= 1
      ? res.status(409).json({ message: 'Mail already exists' })
      : bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = User.create({
              ...req.body,
              password: hash,
              createdAt: currentDateTime,
              updatedAt: null,
            });

            res.status(500).json({ message: 'User created', user });
          }
        });
  } catch (err) {
    res.status(400).send({ error: 'Registration failed', err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);

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
    const id = req.params.id;
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
