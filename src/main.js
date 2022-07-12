import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'amfe-flexible'

// import axios from 'axios'

Vue.use(Vant)

Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://liufusong.top:8080/'
// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
