import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginForm.vue')
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import('../views/RegisterForm.vue')
  // }
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/ReviewsFeed.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
