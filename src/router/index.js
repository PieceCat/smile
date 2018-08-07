import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Demo from '@/components/pages/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/demo',name: 'Demo',component: Demo}
  ]
})
