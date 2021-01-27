// import mongoose database model
const mongoose = require('mongoose');
// Create article collection rules
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please fill in the article title'],
        minlength: 4,
        maxlength: 50
    },
    
    author: {
        //authornned to connect with user
        type: mongoose.Schema.Types.ObjectId,
        //reference key, saved user.id
        ref: 'User',
        required: [true, 'Please input the author'],
        maxlength:20
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String,
        required: true
    }
});
// Use rules to create article collections
const Article = mongoose.model('Article', articleSchema);

// Module export
module.exports = {
    Article
}

