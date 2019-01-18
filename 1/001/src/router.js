import Vue from 'vue';
import Router from 'vue-router';
// 3 1. @ is an alias to /src.
// It's often good to use absolute paths, but not always
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
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
