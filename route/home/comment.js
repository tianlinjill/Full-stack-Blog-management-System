const { Comment } = require('../../model/comment');

module.exports = async (req, res) => {

    const {content, aid, uid} = req.body;

   // Store the comment information in the comment collection
    await Comment.create({
        aid: aid,
        uid: uid,
        content: content,
        time: new Date()

    });
    res.redirect('/home/article?id=' + aid);
    
}

