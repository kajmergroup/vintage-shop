const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER

router.post("/register", async (req, res) => {
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

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("Wrong username!");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const Orgpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (
        Orgpassword !== req.body.password &&
        res.status(401).json("Wrong pass!")
      ) {
      } else {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "1d" }
        );

        const { password, ...others } = user._doc;
        
        res.cookie('token', accessToken, {
          maxAge: 7200000, // 2 hours
          secure: false, // set to true if you're using https
          httpOnly: true,
      }).json(others)
        // res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/logout', function(req,res){
  res.status(200).cookie('token','none',{
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
  }).json('oldu')
  
  
})



module.exports = router;
