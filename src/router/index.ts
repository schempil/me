import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import CV from "@/views/CV.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  }
]

const router = new VueRouter({
  routes
})

export default router
