const { query } = require('express')
const {Article} = require('../../model/article')
module.exports = async (req, res) => {
    // get id
    var id = req.query.id;
    //res.send(id);
    await Article.findOneAndDelete({ _id: id });
    res.redirect('/admin/article');

}