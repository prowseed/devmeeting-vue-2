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
    },
    {
      path: '/user/:userId',
      name: 'user',
      // 11 1. We will lazy load paths using webpack dynamic import
      // webpackChunkName will create separated file in our build called user-management.[hash].js
      component: () => import(/* webpackChunkName: "user-management" */ '@/views/User.vue'),
      children: [
        {
          path: 'posts',
          name: 'userPosts',
          component: () => import(/* webpackChunkName: "user-management" */ '@/views/UserPosts.vue'),
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      // 3 2. This import and the one below will go to separated files
      // and it will be named as chunk-[hash].[hash2].js
      component: () => import('@/views/Register.vue'),
    },
    {
      path: '/login',
      name: 'home',
      // 4 3. it could be a good idea to preload login page in register page
      // If you wonder about preloading, you can find more info here:
      // https://www.reddit.com/r/vuejs/comments/7exvxi/preloading_a_codesplit_vue_component_before_its/
      component: () => import('@/views/Login.vue'),
    },
  ],
});
