import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import ShoppingMall from '@/components/pages/ShoppingMall'
import Demo from '@/components/pages/Demo'
import Register from '@/components/pages/Register'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', name: 'ShoppingMall', component: ShoppingMall },
    { path: '/demo', name: 'Demo', meta: { title: '测试页面' }, component: Demo },
    { path: '/register', name: 'Register', component: Register}
  ]
})
// 路由跳转之后执行 
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '电商项目'
  }
})

export default router