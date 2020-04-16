import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import wx from 'weixin-js-sdk'
import '../src/assets/css/normalize.css'
import '../src/assets/css/animate.css'
Vue.config.productionTip = false

Vue.prototype.$wx=wx
Vue.use(VueAxios,axios);
new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: function (h) { return h(App) }
}).$mount('#app')
