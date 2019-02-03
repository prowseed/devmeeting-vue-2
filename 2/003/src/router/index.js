// o:3
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      //4/ 10. Vue-router allows to provide some metadata
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/Todo.vue'),
    },
  ],
});
