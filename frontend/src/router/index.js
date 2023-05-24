import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/guest/Welcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/guest/Registration.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/guest/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/auth/Home.vue')
    }
  ]
});

export default router;