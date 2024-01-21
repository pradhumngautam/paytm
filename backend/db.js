const mongoose = require('mongoose');

const userSchema = new mongoose.userSchema({
    username: String,
    firstName: String,
    lastName: String,
    passward: String
})

const user = mongoose.model('user', userSchema);

module.exports = {
    user
};