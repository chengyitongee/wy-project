import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routers'

Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history', // 去掉#
  // 配置所有路由
  routes
})
