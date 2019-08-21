import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue' 
import Categroay from './views/categroay.vue'
import goodsDetail from './views/goodsDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/categroay',
      name: 'categroay',
      component: Categroay
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    }
  ]
})
