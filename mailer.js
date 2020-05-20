const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jamiemmarsay@gmail.com",
    pass: "Dt9ln7jew!",
  },
});

const mailOptions = {
  from: "magiclinksender@magiclink.dev",
  to: "jamiemmarsay@gmail.com",
  subject: "MagicLink's Magic Login Link",
  text: "Here is your link!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
