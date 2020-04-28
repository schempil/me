import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/style.scss'
import 'bulma-social/bin/bulma-social.min.css'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
