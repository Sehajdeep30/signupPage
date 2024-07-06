const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String,required: true },
    num: { type: Number, minLength: 10, maxLength: 10, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const UserModel = mongoose.model("Users",UserSchema);
module.exports = UserModel; 