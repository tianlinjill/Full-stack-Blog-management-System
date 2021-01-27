// import formidable 
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');


module.exports = (req, res) => {
     //res.send('add');
    // 1.1 Create form parsing object
    const form = new formidable.IncomingForm();
    // 2. Configure the storage location of uploaded files
    form.uploadDir = path.join(__dirname, '../', '../','public', 'uploads');
    // 3. Keep the suffix of the uploaded file
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
        await Article.create({
            title:fields.title,
            author:fields.author,
            publishDate:fields.publishDate,
            cover:files.cover.path.split('public')[1],
            content:fields.content,
        })
        res.redirect('/admin/article');
    })
}