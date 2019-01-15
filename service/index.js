const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init.js')

// 导入路由
const Router = require('koa-router')
let user = require('./appApi/User.js')
let router = new Router()
router.use('/user',user.routes())
app.use(router.routes()).use(router.allowedMethods())

//中间件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

//跨域
const cors = require('koa2-cors')
app.use(cors())


;(async ()=>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'chenzhengyu',password: '123456'})
    oneUser.save().then(()=>{
        console.log('插入成功')
    })
    let users = await User.findOne({}).exec()
    console.log('----------------------')
    console.log(users)
    console.log('----------------------')
})()


app.use(async(ctx)=>{
    ctx.body = '<h1>hello world</h1>'
})

app.listen(3000,()=>{
    console.log('[server] starting at port 3000')
})