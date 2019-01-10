//单一页面
// const Koa = require('koa')
// const Router = require('koa-router')

// const app = new Koa();
// const router = new Router()

// router.get('/',function(ctx,next){
//   ctx.body = 'Hello koa-router'
// })

// app
// .use(router.routes())
// .use(router.allowedMethods())

// app.listen(3000,()=>{
//   console.log('[demo] server starting at port 3000')
// })

// 多页面配置
const Koa = require('koa')
const Router = require('koa-router')
const router = new Router();
const app = new Koa();

router
.get('/',function(ctx,next){
  ctx.body = 'Hello chen'
})
.get('/todo',function(ctx,next){
  ctx.body = 'Todo page'
})
.get('/404',(ctx,next)=>{
  ctx.body = '404 page'
})

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(3000,()=>{
  console.log('[demo] server starting at port 3000')
})