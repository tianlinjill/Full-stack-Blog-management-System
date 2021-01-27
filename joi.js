// 验证规则模块
// 引入joi模块
const Joi = require('joi');

// 定义对象的验证规则
const schema =Joi.object( {
    username: Joi.string()
        .min(2)
        .max(5).error(new Error('username 属性没有通过验证'))
    ,
      password: Joi.string()
         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    //     repeat_password: Joi.ref('password'),
})
    
    // .xor('password','repeat_password')

//schema.validate({ username: 'ab' });

async function run() {
    try {
         //实施验证
        const value = await schema.validateAsync({ username: 'ab', password: '123'});
    } catch (ex) {
        console.log(ex);
        return;
    }
    console.log('验证通过')
    
}
run();