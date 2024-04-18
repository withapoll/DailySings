import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginForm.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
