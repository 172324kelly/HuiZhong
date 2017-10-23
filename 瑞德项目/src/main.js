// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//加载vue框架
import App from './App'//页面的入口(组件主入口)顶层组件，页面都以组件的形态存在
import router from './router'//路由入口
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'//状态管理入口

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//等价于router:router,
  store,
  template: '<App/>',
  components: { App }
})
