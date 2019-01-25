import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import About from '@/views/About.vue';
import UserPosts from '@/views/UserPosts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      //2 4. And expose it by path params
      path: '/user/:userId',
      name: 'user',
      component: User,
      //7 6. You can also provide children routes
      children: [
        {
          path: 'posts',
          name: 'userPosts',
          component: UserPosts,
        },
      ],
    },
  ],
});
