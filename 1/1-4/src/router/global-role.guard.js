import router from './index';

const AuthServiceMock = {
  loggedIn() {
    return true;
  },
};

// 15 11. You can use that whereever you wants, eg. in global guard
router.beforeEach((to, from, next) => {
  // 6 12. In this guard if the path provides requiresAuth metadata, we check if user is logged in
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 2 13. condition with our mock auth service
    if (!AuthServiceMock.loggedIn()) {
      // 5 14. Redirects to login page
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      // 5 15. allows to enter route
      next();
    }
  } else {
    next();
  }
});
