import { Button } from 'vant'
import 'vant/lib/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
