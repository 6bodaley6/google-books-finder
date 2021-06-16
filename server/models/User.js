const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const bookSchema = require('./Book');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must enter valid email'],
        },
        password: {
            type: String,
            required: true,
        },
        //set savedBooks to an array
        savedBooks: [bookSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);
//password hash
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});
//custom validation for password to log in 
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.pasword);
};
//query user and get booCout with the number of saved books that user has
userSchema.virtual('bookCount').get(function () {
    return this.savedBooks.length;
});

const User = model('User', userSchema);

module.exports = User;