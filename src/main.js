import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false
Vue.use(VuePaginate)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
