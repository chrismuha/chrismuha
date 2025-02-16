import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/index', name: 'index', redirect: '/' },
    { path: '/home', redirect: '/' },
    { 
      path: '/bookmarks', 
      redirect: () => window.location.href = '/bookmarks.html' 
    },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/services', name: 'services', component: () => import('@/views/ServicesView.vue') },
    { path: '/billing', name: 'billing', component: () => import('@/views/BillingView.vue') },
    { path: '/book', name: 'book', component: () => import('@/views/BookView.vue') },
    { path: '/policies', name: 'policies', component: () => import('@/views/PoliciesView.vue') },
    { path: '/hiring', name: 'hiring', component: () => import('@/views/HiringView.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/404View.vue') }, 
  ]
})

export default router
