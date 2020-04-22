import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import wx from 'weixin-js-sdk'
import '../src/assets/css/normalize.css'
import '../src/assets/css/animate.css'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole() //实例化
Vue.config.productionTip = false

Vue.prototype.$wx=wx
Vue.prototype.$axios=axios
Vue.use(VueAxios,axios);
new Vue({
  router,
  store,
  VueAxios,
  axios,
  render: function (h) { return h(App) }
}).$mount('#app')
