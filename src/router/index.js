import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import BillingView from '@/views/BillingView.vue'
import BookView from '@/views/BookView.vue'
import PoliciesView from '@/views/PoliciesView.vue'
import HiringView from '@/views/HiringView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/',
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/billing',
      name: 'billing',
      component: BillingView,
    },
    {
      path: '/book',
      name: 'book',
      component: BookView,
    },
    {
      path: '/policies',
      name: 'policies',
      component: PoliciesView,
    },
    {
      path: '/hiring',
      name: 'hiring',
      component: HiringView,
    },
  ],
})

export default router
