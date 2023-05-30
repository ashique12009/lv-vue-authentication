import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/guest/Welcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/views/guest/Registration.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/guest/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/auth/Home.vue')
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('@/views/guest/ForgotPassword.vue')
    },
    {
      path: '/password-reset/:token',
      name: 'PasswordReset',
      component: () => import('@/views/guest/PasswordReset.vue')
    }
  ]
});

export default router;