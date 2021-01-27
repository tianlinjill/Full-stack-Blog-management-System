// 导入formidable第三方模块
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');
module.exports = async (req, res) => {
    
     const id = req.query.id;
    const form = new formidable.IncomingForm();
    // 2. Configure the storage location of uploaded files
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 3.Keep the suffix of the uploaded file

    form.keepExtensions = true;
    // 4. Parse the form
    form.parse(req, async (err, fields,files) => {
      // 1 err object  If the form fails to parse err will store error messages elsse err will be null
        // 2. fields object class Save normal form data
        // 3.files object class Save the data related to the uploaded file
        //console.log(files.cover.path.split('public')[1]);
        //res.send(fields);
        //res.send(files);
        //res.send(files.cover.path.split('public')[1]);
    await Article.updateOne({_id:id},{
            title:fields.title,
            author:fields.author,
            publishDate:fields.publishDate,
            cover:files.cover.path.split('public')[1],
            content:fields.content,
        })
        res.redirect('/admin/article');
    })
}
    
   
   
    

