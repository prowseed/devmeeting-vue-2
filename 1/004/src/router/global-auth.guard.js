import router from './index';

const AuthServiceMock = {
  loggedIn() {
    return true;
  },
};

//11/ 11. You can create global guards
router.beforeEach((to, from, next) => {
  //1/ 12. Checks if user is logged in, only if requiresAuth occurs in meta
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //1/ 13. Condition with mock service
    if (AuthServiceMock.loggedIn()) {
      //1/ 14. Allows to enter the route
      next();
    } else {
      //4/ 15. Redirects to login page
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});
