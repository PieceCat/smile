const Router = require('koa-router')
let router = new Router()
const mongoose = require('mongoose')

// router.get('/',async(ctx)=>{
//     ctx.body = '这是用户操作首页'
// })

router.post('/register',async(ctx)=>{
    console.log(ctx.request.body)
    ctx.body= ctx.request.body
})

// router.post('/register',async(ctx)=>{
//     //取得Model
//     const User = mongoose.model('User')
//     //把从前端接受的POST数据封装成一个新的user对象
//     let newUser = new User(ctx.request.body)
//     console.log(newUser)
//     //用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
//     await newUser.save().then(()=>{
//         ctx.body = {
//             code: 200,
//             message: '注册成功'
//         }
//     }).catch(error=>{
//         ctx.body = {
//             code: 500,
//             message: error
//         }
//     })
// })
module.exports = router;