//import moogoose 
const mongoose = require('mongoose');
//  import config 
const config = require('config');
//connect database
console.log(config.get('db.host'))
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('database connected success!'))
    .catch(err => console.log(err, 'database connected failed!'));