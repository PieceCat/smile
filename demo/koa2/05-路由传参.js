const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

let router = new Router()
router.get('/',(ctx,next)=>{
    ctx.body = ctx.query
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('[demo] server starting at port 3000')
})