const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const logger = require("../logger");
const VerifyCode = require("../controllers/verifycode");
const Verify = require("../models/Verify");


// SEND EMAIL
router.post("/verify", async (req, res) => {
  const email = req.body.email;

  let verify = await Verify.findOne({ email });
  try {
    const code = Math.floor(100000 + Math.random() * 900000);
    if (verify) {
      verify.code = code;
    } else {
      Verify.create({
        code: code, 
        email: req.body.email,
      });
    }
    VerifyCode(req, code);
    verify.save();
    setTimeout
    res.status(200).json('success:true')
    logger.info('success:true from verify endpoint')
    
  } catch (err) {
    res.status(200).json('success:false')
    logger.info('success:false from verify endpoint')
  }
});
// REGISTER
router.post("/register", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const code = await Verify.findOne({ email });
  console.log(req.body.code);
  try {
    if (code.code === req.body.code) {
      const newUser = new User({
        first_name: req.body.first_name,
        phone: req.body.phone,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString(),
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
      logger.info('success:true from register endpoint')
    } else {
      res.status(500).json("geçersiz kod girdiniz");
      logger.info('success:false from register endpoint')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
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
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "1d" }
        );
        logger.info("log from login endpoint success");
        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    logger.error("error from login endpoint");
    res.status(500).json(err);
  }
});

router.get("/logout", (req, res) => {
  logger.info("log from login endpoint logout");
  res.status(200).json("success logout");
});

module.exports = router;
