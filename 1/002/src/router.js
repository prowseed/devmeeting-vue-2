import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
import About from '@/views/About.vue';
import UserPosts from '@/views/UserPosts.vue';

//3/ 4. Router is a simple plugin used by Vue instance
Vue.use(Router);

export default new Router({
  routes: [
    //4/ 5. Path declaration
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
      //1/ 6. The route params can be exposed through path declaration
      path: '/user/:userId',
      name: 'user',
      component: User,
      //7/ 7. Children routes declaration
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
