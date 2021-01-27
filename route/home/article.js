const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');
module.exports = async(req, res) => {
    const id = req.query.id;
   
    let article = await Article.findOne({ _id: id }).populate('author');
    let articleStr = JSON.stringify(article);
    article = JSON.parse(articleStr)
    
    // Query the comment information corresponding to the current article
    let comments = await Comment.find({ aid: id }).populate('uid');
    let commentsStr = JSON.stringify(comments);
    comments = JSON.parse(commentsStr)
    // res.send(comments)
    // return;
    //res.send(article);
    res.render('home/article.art', {
        article: article,
        comments: comments
    })
}