import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import qs from 'qs'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.prototype.$qs=qs
Vue.prototype.axios = axios
Vue.use(iView);
// Vue.use(VueRouter)

// const router = new Router({
//     routes: VueRouter.routes,
// })
Vue.config.productionTip = false
Vue.prototype.api = process.env.NODE_ENV === 'production' ? '' : '/api'
// Vue.use(axios);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
