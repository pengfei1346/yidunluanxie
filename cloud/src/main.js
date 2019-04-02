import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import $axios from './util/$axios'
import store from './store/index'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
