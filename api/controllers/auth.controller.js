const db = require("../models/index.js");
const User = db.users;
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const logger = require("../logger");

// LOGIN
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      logger.info("log from login endpoint wrong username");
      res.status(401).json("Wrong username!");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const Orgpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (Orgpassword !== req.body.password) {
        res.status(401).json("Wrong pass!");
        logger.info("log from login endpoint wrong username");
      } else {
        const accessToken = jwt.sign(
          {
            id: user.id,
            isAdmin: user.is_admin,
          },
          process.env.JWT_SEC,
          { expiresIn: "1d" }
        );
        logger.info("log from login endpoint success");
        const { id, username } = user;

        res.status(200).json({ id, accessToken, username });
      }
    }
  } catch (err) {
    logger.error("error from login endpoint");
    res.status(500).json(err);
  }
};

// REGISTER
exports.register = async (req, res) => {
  const user = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    is_admin: req.body.is_Admin,
  };

  try {
    await User.create(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("message:", err);
  }
};
