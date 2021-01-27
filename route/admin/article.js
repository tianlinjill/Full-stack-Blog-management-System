// Import the article collection's constructor into the current file
const { Article } = require('../../model/article');
// import mongoose-sex-page page
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    //Accept the page number passed by the user
    const page = req.query.page;
     //Indicates that the current visit is the article management page
    req.app.locals.currentLink = 'article';
    // Query all article data
    // page: Specify the current page size:Specify the number of actual data items per page display:Specify the number of page numbers to be displayed on the client
    //exec: Send query request to database
    let articles = await pagination(Article).find().page(page).size(5).display(3).populate('author').exec();
    let articlesStr = JSON.stringify(articles);
    articles = JSON.parse(articlesStr)
    //res.send(articles);
    
   //render
    res.render('admin/article.art',{
        articles: articles
       
    });
}