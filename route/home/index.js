
// Import article collection
const { Article } = require('../../model/article');

// Import the paging module
const pagination = require('mongoose-sex-page');
module.exports = async (req, res) => {
    const page = req.query.page;
    
    // Query data from the database
    let result = await pagination(Article).page(page).size(4).display(5).find().populate('author').exec();
    // WARNNING: RangeError: Maximum call stack size exceeded
    let resultStr = JSON.stringify(result);
    result = JSON.parse(resultStr)
    
    // Render the template and pass data
    res.render('home/default.art', {
        result: result
    })
}