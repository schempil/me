import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/style.scss'
import VueRouter from "vue-router";
import Welcome from "./views/Welcome";

const routes = [
  { path: '/', component: Welcome, props: { name: 'Philipp Schemel' } }
]

const router = new VueRouter({ routes, mode: 'history' })

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
