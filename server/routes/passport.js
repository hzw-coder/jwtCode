const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

// 登录接口
router.post('/login', (req, res) => {
    console.log(req.body);
    let {
        username,
        password
    } = req.body
    // 写死数据代替mysql
    if (username == 'admin' && password == '123456') {
        let token = jwt.sign({
            username: username
        }, 'GDAM#$dg%S', {
            expiresIn: 60 * 60 * 2
        })
        res.send({
            code: '1',
            msg: '登录成功',
            token: token
        })
    } else {
        res.send({
            code: 2,
            msg: '用户名或密码错误'
        })
    }
})
// 生成token
// router.get('/passport/token', (req, res) => {
//     // Restful风格
//     // 生成token
//     const token = jwt.sign({
//         username: 'zhangsan'
//     }, 'AKJ$f#gd%', {
//         expiresIn: 60 * 60 * 2
//     })
//     // 颁发
//     res.send({
//         code: 1,
//         msg: '生成成功',
//         token: token
//     })
// })

module.exports = router