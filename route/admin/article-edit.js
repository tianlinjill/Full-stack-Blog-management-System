const {Article} = require('../../model/article')

module.exports = async(req, res) => {
    // Get the id parameter in the address bar
    const {id } = req.query;
    // indicates that the current visit is the article management page
    req.app.locals.currentLink = 'article';
    //res.send(id);
    if (id) {
       
        let article = await Article.findOne({ _id: id }).populate('author');
        let articlesStr = JSON.stringify(article);
        article = JSON.parse(articlesStr)
          
       //edit page
        res.render('admin/article-edit', {
            article: article,
            link: '/admin/article-modify?id='+id,
            button: 'Edit',
            title: 'User id：' + id
            
            
        })
    } else {
       //add page 
        res.render('admin/article-edit', {
            link: '/admin/article-add',
            button: 'Add',
              title: 'Add Article'
        });
    }
    //res.render('admin/article-edit');
}