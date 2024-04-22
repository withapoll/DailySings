import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArtistView from '../views/ArtistView.vue'

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
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/RegistrationForm.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/ReviewsFeed.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: ArtistView
  },
  {
    path: '/add-review/:artistId',
    name: 'AddReview',
    props: true,
    component: () => import('../views/AddReview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Update the navigation bar component's state or data here
  // For example, set the active route or highlight the appropriate navigation item

  next() // Always call next() to continue the navigation
})

export default router
