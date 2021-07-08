const express = require('express')
const passportRouter = require('./routes/passport.js')

let appConfig = app => {
    app.all("*", (req, res, next) => {
        // 响应头设置 添加Methods: OPTIONS、Headers: Authorization
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); // 设置允许接收的请求类型
        res.header('Access-Control-Allow-Headers', 'content-type,Access-Token,Authorization,token'); //设置允许前端请求时带有的字段值
        res.header("Access-Control-Request-Headers", "content-Type, Authorization"); //发出请求时报头用于预检请求让服务器知道哪些 HTTP 头的实际请求时将被使用
        res.header('Access-Control-Allow-Credentials', 'true'); // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
        next()
    })

    // 添加拦截器
    // app.use((req, res, next) => {
    //     let authorization = req.get('Authorization')
    //     if (req.path != '/login') {
    //         jwt.verify(authorization, 'GDAM#$dg%S', (err, decode) => {
    //             if (err) {
    //                 res.status(403).send('认证无效')
    //             } else {
    //                 next()
    //             }
    //         })
    //     } else {
    //         next()
    //     }
    // })

    // 配置post解析参数
    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))

    // 注册路由
    app.use(passportRouter)
}

module.exports = appConfig