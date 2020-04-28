import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/style.scss'
import VueRouter from "vue-router";
import Welcome from "./components/Welcome";
import Work from "./components/Work";
import Contact from "./components/Contact";

const routes = [
  { path: '/', component: Welcome, props: { name: 'Philipp Schemel' } },
  { path: '/work', component: Work},
  { path: '/contact', component: Contact}
]

const router = new VueRouter({ routes, mode: 'history' })

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
