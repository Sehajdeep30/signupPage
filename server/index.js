const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://sehajdeepsinghkhalsa:gv9KpiA0Z4AnqrqX@cluster0.gfmxypt.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", (req, res) => {
  const { name, num, email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json("Account Already Exists");
      } else {
        UserModel.create(req.body)
          .then((Users) => res.json(Users))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => console.log(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password == password) {
          res.json("Success");
        } else {
          res.json("Incorrect Password");
        }
      } else {
        res.json("No record exists");
      }
    })
    .catch((err) => console.log(err));
});

app.listen(process.env.PORT || 3000);

module.exports = app;
