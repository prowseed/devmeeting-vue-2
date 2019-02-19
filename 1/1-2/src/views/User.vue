<template>
  <div>
    <!--1/ 8. $route is a way to get informations from router  -->
    <span>{{ $route.params }}</span>
    <!--1/ 10. ...and call it -->
    <router-link :to="{ name: 'userPosts' }">Posts</router-link>
    <!--1/ 9. We can add nested router-view... -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'user',
};
</script>
