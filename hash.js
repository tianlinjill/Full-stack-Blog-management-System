// import bcrypt
const bcrypt = require('bcrypt');
// Generate random string
// gensalt Accept a value as a parameter. The higher the value, the higher the complexity. The default is 10.
// 返回生成的随机字符串


async function run() {
    const salt = await bcrypt.genSalt(10)
    //Encrypt the password
    const result = await bcrypt.hash('123456', salt);
    console.log(salt);
    console.log(result);
}
run();