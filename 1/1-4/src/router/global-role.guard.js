import router from './index';

const AuthServiceMock = {
  loggedIn() {
    return true;
  },
};

//15 11. You can create global guards
router.beforeEach((to, from, next) => {
  //6 12. Here we check if user is logged in if requiresAuth occurs in meta
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //2 13. Condition with our mock service
    if (!AuthServiceMock.loggedIn()) {
      //5 14. Redirects to login page
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      //5 15. Allows to enter route
      next();
    }
  } else {
    next();
  }
});
