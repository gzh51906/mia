import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
// 引入vant的组件
// import Vant from './vant/index'
// Vant()
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
