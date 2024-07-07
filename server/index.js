const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://signup-page-ebon.vercel.app/", // Frontend URL
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"],
    allowedOrigin : "https://signup-page-ebon.vercel.app/"

  })
);
mongoose.connect(
  "mongodb+srv://sehajdeepsinghkhalsa:gv9KpiA0Z4AnqrqX@cluster0.gfmxypt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.post("/register", (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://signup-page-ebon.vercel.app/');
  UserModel.create(req.body)
    .then((Users) => res.json(Users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://signup-page-ebon.vercel.app/');
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
