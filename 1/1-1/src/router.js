import Vue from 'vue';
import Router from 'vue-router';
// 3 1. In vue project @ is an alias to /src.
// It's sometimes good to use absolute paths, but NOT ALWAYS
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

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
      component: About,
    },
  ],
});
