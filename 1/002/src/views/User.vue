<template>
  <div>
    <!--2/ 6. The $route is a way to get informations from router  -->
    <span>{{ $route.params }}</span>
    <!--2/ 8. ...and call it -->
    <router-link :to="{ name: 'userPosts' }">Posts</router-link>
    <!--2/ 7. We can also add nested router-view... -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'user',
};
</script>
