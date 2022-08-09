const nodemailer = require("nodemailer");
const Verify = require("../models/Verify");

function VerifyCode(req, code) {
  
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "baris31.test@hotmail.com",
      pass: "Baris.155",
    },
  });
  let mailOptions = {
    from: "baris31.test@hotmail.com",
    to: req.body.email,
    subject: "VERIFY CODE",
    text: `Here is the confirmation code for your register:${code}`,
  };

  const sendEmail = () => {
    transporter.sendMail(mailOptions, function (err, succ) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully.");
      }
    });
  };

  sendEmail();
}
module.exports = VerifyCode;
