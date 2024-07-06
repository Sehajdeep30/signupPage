const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://signup-page-brown.vercel.app", // Frontend URL
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
mongoose.connect(
  "mongodb+srv://Sehajdeep:rDhz7zUPr0@sehaj.lu7b4qy.mongodb.net/?retryWrites=true&w=majority&appName=Sehaj"
);

app.post("/register", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true);
  UserModel.create(req.body)
    .then((Users) => res.json(Users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true);
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

app.listen(3000, () => {
  console.log("Server is Running");
});
