import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/vant.js'
import 'lib-flexible/flexible.js'
import VeeValidate from 'vee-validate';
 
Vue.use(VeeValidate);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
