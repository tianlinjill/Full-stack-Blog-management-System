const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    //article ID
    aid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Article'
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    // comment time
    time: {
        type:Date
    },
    // comments
    content: {
        type:String
    }
});

// Create comment collection
const Comment = mongoose.model('Comment', commentSchema);

// Export the comment collection module
module.exports = {
    Comment
};