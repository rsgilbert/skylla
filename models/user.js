const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    trainer: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
})

userSchema.methods.checkPassword = function(guess, done) {
    return bcrypt.compare(guess, this.hashedPassword, function(err, isMatch) {
        done(err, isMatch)
    })
}

module.exports = mongoose.model("User", userSchema);

