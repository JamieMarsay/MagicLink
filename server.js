const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const port = 3000;

const token = jwt.sign({ id: "testId" }, "SuperSecret");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremailhere@gmail.com",
    pass: "yourSecretPassword",
  },
});

app.listen(port, () => console.log(`Server listening on ${port}`));

app.get("/login", (req, res) => {
  const emailAddress = req.query.email;

  const mailOptions = {
    to: emailAddress,
    subject: "MagicLink's Magic Login Link",
    text: "Here is your link!",
    html: `<a href="http://localhost:3000/verify?email=${emailAddress}&token=${token}">Login</a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent to: ${emailAddress} ` + info.response);
    }
  });

  res.send("Check your email for the Magic Link!");
});

app.get("/verify", (req, res) => {
  const token = req.query.token;

  jwt.verify(token, "SuperSecret", (err, decoded) => {
    if (decoded) {
      res.send("You've logged in!");
    } else {
      res.send("Something went wrong!");
    }
  });
});
