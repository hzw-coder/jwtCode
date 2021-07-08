// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 请求拦截器
axios.interceptors.request.use(config => {
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
