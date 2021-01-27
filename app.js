// 引入dateformat 进行全局配置
const dateFormate = require('dateformat');
// 引入morgan 第三方模块 返回值是一个方法，方便把客户端发送给服务器端的请求打印在控制台上
const morgan =require('morgan')
// 导入config模块
const config = require('config');
//引用express框架
const express = require('express');
//创建网站服务器
const app = express();
const path = require('path');
//引入body parser模块 用来处理post参数
const bodyParser = require('body-parser');
// 导入express-session模块
const session = require('express-session');
// 导入art-template模板引擎
const template = require('art-template');
//数据库连接
require('./model/connect');
// 处理post请求参数
app.use(bodyParser.urlencoded({extended:false}));
// 配置session
app.use(session({secret:'secret key'}));
//告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
//告诉express框架模板默认的后缀
app.set('view engine', 'art');
//当选软后缀为art的模板时，所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
//向模板引擎导入dateformate变量
template.defaults.imports.dateFormate = dateFormate;
//开放静态文件
app.use(express.static(path.join(__dirname, 'public')));

console.log(config.get('title'))

// 获取系统环境变量 返回值是对象
if (process.env.Node_env == 'development') {
    // 当前是开发环境
    console.log('当前是开发环境')
    // 在开发环境中 将哭护短发送到服务器端的请求信息打印到控制台中
    app.use(morgan('dev'));
} else {
    // 当前是生产环境
    console.log('当前是生产环境')
}

// 引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');
const { Script } = require('vm');

//拦截请求 判断用户登录状态 除了/admin/login 其他都要拦截
// 代码拆分到中间件 guard
app.use('/admin', require('./middleware/loginGurad'));


// 匹配以及请求路径
app.use('/home', home);
app.use('/admin', admin);



//监听80端口
app.listen(80);
console.log('服务器已启动,请访问localhost');

