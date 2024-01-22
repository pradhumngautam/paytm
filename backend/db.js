const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pradhumngautam:ocbszU1bBSMIc8Aj@cluster0.mojxgk8.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};