// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Toast } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios';

Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Toast)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Axios.defaults.baseURL = "https://www.easy-mock.com/mock/5b693c0d8733b43c01e267dc/example/"
Vue.prototype.$http = Axios
Vue.prototype.axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
