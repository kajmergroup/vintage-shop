const db = require("../models/index.js");
const User = db.users;
const Address = db.user_address;
const jwt = require("jsonwebtoken");
const logger = require("../logger");

// UPDATE USER
exports.update = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.param.id } });
    user.set({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(200).json("User has been updated");
    logger.info(`User ${req.params.id} has been updated.`);
  } catch (err) {
    res.status(500).json(err);
    logger.warn("Something went wrong while updating user");
  }
};

// DELETE USERS
exports.delete = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(`User ${req.params.id} has been deleted`);
  } catch (err) {
    res.status(500).json(err);
    logger.warn("Something went wrong while deleting user");
  }
};

// GET USERS
exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
    logger.warn("Something went wrong while gettin all users");
  }
};

// GET USER
exports.getOne = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    logger.warn("Something went wrong while getting single user");
  }
};

// UPDATE USER ADDRESS
exports.update_address = async (req, res) => {
  try {
    const address = await Address.findOne({ where: { id: req.params.id } });
    address.set({
      address_title: req.body.title,
      city: req.body.city,
      town: req.body.town,
      address_line: req.body.address_line,
      postal_code: req.body.postal_code,
    });
    await address.save();
    res.status(200).json(`User's has been updated.`);
    logger.info(`User's address ${req.params.id} has been updated.`);
  } catch (err) {
    res.status(500).json(err);
    logger.warn(`User's address ${req.params.id} has been updated.`);
  }
};

// DELETE USER ADDRESS
exports.delete_address = async (req, res) => {
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    return user.id;
  });
  try {
    await Address.destroy({ where: { id: req.params.id }, user_id: userId });
    res.status(200).json("Users address has been deleted.");
    logger.info(`User's address ${req.params.id} has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
    logger.warn("Something went wrong while deleting users address");
  }
};

// USER ADDRESS
exports.create_address = async (req, res) => {
  const token = req.headers.token.split(" ")[1];
  const userId = jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    return user.id;
  });
  const address = {
    user_id: userId,
    address_title: req.body.address_title,
    city: req.body.city,
    town: req.body.town,
    address_line: req.body.address_line,
    postal_code: req.body.postal_code,
  };
  try {
    await Address.create(address);
    res.status(200).json(address);
    logger.info(`Added new address for user_id: ${userId}`);
  } catch (err) {
    res.status(500).json(err);
    logger.error("Something went wrong while adding address ");
  }
};
