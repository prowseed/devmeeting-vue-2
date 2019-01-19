import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import User from '@/views/User.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      // 2 4. And expose it through path params
      path: '/user/:userId',
      name: 'user',
      component: User,
    },
  ],
});
