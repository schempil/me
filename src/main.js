import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './assets/style.scss'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
