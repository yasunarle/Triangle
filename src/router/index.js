import Vue from 'vue'
import VueRouter from 'vue-router'
// Views
import Home from '../views/Home.vue'
import Ssh from '../views/Ssh.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Loggedin from '../views/Loggedin.vue'
// Components


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },  
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },  
  {
    path: '/loggedin',
    name: 'loggedin',
    component: Loggedin
  },  
  {
    path: '/ssh',
    name: 'ssh',
    component: Ssh
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
