import { createRouter, createWebHistory } from 'vue-router';

import index from '../views/index.vue';
import comments from '../views/comments.vue';
import admin from '../views/admin.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/comments',
    component: comments
  },
  {
    path: `/${process.env.VUE_APP_ADMIN_PAGE_TOKEN}:admin`,
    component: admin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
