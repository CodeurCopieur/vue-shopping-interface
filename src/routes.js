import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home'
import User from './views/user-settings'
import wish from './views/wish-list'
import Shopping from './views/shopping-cart'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/user-settings', component: User },
    { path: '/wish-list', component: wish },
    { path: '/shopping-cart', component: Shopping },
  ]
})