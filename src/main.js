import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wx from 'weixin-js-sdk'
import '../src/assets/css/normalize.css'
import '../src/assets/css/animate.css'
Vue.config.productionTip = false
wx.config({
  // 配置信息, 即使不正确也能使用 wx.ready
  debug: false,
  appId: '',
  timestamp: 1,
  nonceStr: '',
  signature: '',
  jsApiList: []
});
Vue.prototype.$wx=wx
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
