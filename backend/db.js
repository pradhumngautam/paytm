const mongoose = require('mongoose');
// mongodb+srv://pradhumngautam:GQWTXj2u9Ed7ks0d@cluster0.mojxgk8.mongodb.net/paytm

mongoose.connect("mongodb+srv://shivamshahi06:T6ryvlOIFULBojpW@cluster0.n4myvwx.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});


const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};