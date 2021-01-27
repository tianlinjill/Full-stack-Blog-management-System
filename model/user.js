//import the database module
const mongoose = require('mongoose');
//  import joi
const Joi = require('joi')
// import bcrypt
const bcrypt = require('bcrypt');
//Create user collection
//Create user collection rules
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //  keep emial add unique
        unique: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    // admin
    // role
    role: {
        type: String,
        required:true
    },
    // 0 actived
    // 1 Disable
    state: {
        type: Number,
        default:0
    }
});

// Create collection
const User = mongoose.model('User', UserSchema);
async function creatUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
        username: 'bruce',
        email: 'bruce.au@gmail.com',
        password: 123456,
        role: 'admin',
        state: 0
    });
}

const validateUser = user => {
    // Define validation rules for objects
    const schema = Joi.object({
         username: Joi.string()
            .min(2)
            .max(12)
            .required()
            .error(new Error('Username does not meet verification rules')),
        
        email: Joi.string()
            .email()
            .error(new Error('Email format does not meet the requirements')),
        
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .error(new Error('Password format does not meet the requirements')),
        role: Joi.string()
            .valid('normal', 'admin')
            .required()
            .error(new Error('Illegal role')),
        state: Joi.string()
            .valid('0', '1')
            .required()
            .error(new Error('Illegal state'))

    });
      //Implementation verification

        return schema.validateAsync(user);
}


module.exports = {
    User,
    validateUser
}