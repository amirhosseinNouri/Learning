import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UsersPage from '@/views/UsersPage.vue'
import UserDetail from '@/views/UserDetail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/users',
      component: UsersPage,
    },
    {
      path: '/users/:id',
      component: UserDetail,
    },
  ],
})
